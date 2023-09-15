import './CreateTaskModals.css'
import React, { useState, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getUserDailies, createNewDaily } from '../../store/dailies'
import Calendar from 'react-calendar'
import { stringToInt2 } from '../Dailies/DateFunctions'
import { checkWeekdayOne, checkWeekdayTwo, checkWeekdayThree, checkWeekdayFour, checkWeekdayFive, checkWeekdaySix, checkWeekdaySeven } from '../Dailies/weekdayFills'

const CreateDailyModal = ({ onSubmit, onClose }) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [difficulty, setDifficulty] = useState('Easy')
    const [tags, setTags] = useState('')
    const today = new Date()
    const [startDate, setStartDate] = useState(today)
    const [errors, setErrors] = useState([])
    const [showCal, setShowCal] = useState(false)
    const [repeats, setRepeats] = useState('daily')
    const [numRepeats, setNumRepeats] = useState(1)
    const [dayOfRepeat, setDayOfRepeat] = useState('')
    const [checklist, setChecklist] = useState('')
    const [newChecklistItem, setNewChecklistItem] = useState('')


    const [sundayFill, setSundayFill] = useState(checkWeekdayOne(dayOfRepeat))
    const [mondayFill, setMondayFill] = useState(checkWeekdayTwo(dayOfRepeat))
    const [tuesdayFill, setTuesdayFill] = useState(checkWeekdayThree(dayOfRepeat))
    const [wednesdayFill, setWednesdayFill] = useState(checkWeekdayFour(dayOfRepeat))
    const [thursdayFill, setThursdayFill] = useState(checkWeekdayFive(dayOfRepeat))
    const [fridayFill, setFridayFill] = useState(checkWeekdaySix(dayOfRepeat))
    const [saturdayFill, setSaturdayFill] = useState(checkWeekdaySeven(dayOfRepeat))

    const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false)
    const [showTagDropdown, setShowTagDropdown] = useState("hidden")

    let repeatData
    let calDisplay
    let startDateDisplay

    const trivialOption = (
        <div className='difficulty-option-outer-container' onClick={() => setDifficulty("Trivial")}>
            <div className='individual-difficulty-option'>
                <span>Trivial</span>
            </div>
            <div>
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
            </div>
        </div>
    )

    const easyOption = (
        <div className='difficulty-option-outer-container'  onClick={() => setDifficulty("Easy")}>
            <div className='individual-difficulty-option'>
                <span>Easy</span>
            </div>
            <div>
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
            </div>
        </div>
    )

    const mediumOption = (
        <div className='difficulty-option-outer-container'  onClick={() => setDifficulty("Medium")}>
            <div className='individual-difficulty-option'>
                <span>Medium</span>
            </div>
            <div>
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
            </div>
        </div>
    )

    const hardOption = (
        <div className='difficulty-option-outer-container'  onClick={() => setDifficulty("Hard")}>
            <div className='individual-difficulty-option'>
                <span>Hard</span>
            </div>
            <div>
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
            </div>
        </div>
    )

    const difficultyDropdown = (
        <div id={`difficulty-dropdown-container-${showDifficultyDropdown}`}>
            {trivialOption}
            {easyOption}
            {mediumOption}
            {hardOption}
        </div>
    )

    const difficultyDisplay = (
        <div id='chosen-difficulty-display' onClick={() => showDifficultyDropdown ? setShowDifficultyDropdown(false) : setShowDifficultyDropdown(true)} >
            <p>{difficulty}</p><img src="https://i.ibb.co/tpMrL6c/down-arrow-not-filled.png" alt="down-arrow-not-filled" border="0" style={{"height": "14px"}} />
        </div>
    )

    const processDeleteChecklistItem = (item) => {
        const allItems = checklist.split(", ")
        const checkExist = allItems.filter(i => i.toLowerCase() === item.toLowerCase())

        if(checkExist.length !== 0) {
            const index = allItems.indexOf(item)
            allItems.splice(index, 1)
            const res = allItems.join(", ")
            setChecklist(res)
            return
        } else {
            return
        }
    }

    const processAddTags = (value) => {
        const tagsArr = tags.split(", ")
        const checker = tagsArr.filter((tag) => tag.toLowerCase() === value.toLowerCase())
        // console.log(checker)
        if(checker.length === 1) {
            return
        } else {
            tagsArr.push(value)
            const result = tagsArr.join(", ")
            setTags(result)
            return
        }
    }

    const processDeleteWeekday = (day) => {
        const allWeekdays = dayOfRepeat.split(", ")
        const checkExist = allWeekdays.filter(i => i.toLowerCase() === day.toLowerCase())

        if(checkExist.length !== 0) {
            const index = allWeekdays.indexOf(day)
            allWeekdays.splice(index, 1)
            const res = allWeekdays.join(", ")
            setDayOfRepeat(res)
            return
        } else {
            return
        }
    }

    const onWeekdayClick = (day) => {
        if(day.toLowerCase() === "sunday") {
            if(sundayFill === 'filled') {
                setSundayFill('empty')
                processDeleteWeekday("sunday")
            } else {
                setSundayFill('filled')
                setDayOfRepeat(dayOfRepeat + ", sunday")
            }
            // console.log(dayOfRepeat)
        } else if(day.toLowerCase() === "monday") {
            if(mondayFill === 'filled') {
                setMondayFill('empty')
                processDeleteWeekday("monday")
            } else {
                setMondayFill('filled')
                setDayOfRepeat(dayOfRepeat + ", monday")
            }
        } else if(day.toLowerCase() === "tuesday") {
            if(tuesdayFill === 'filled') {
                setTuesdayFill('empty')
                processDeleteWeekday("tuesday")
            } else {
                setTuesdayFill('filled')
                setDayOfRepeat(dayOfRepeat + ", tuesday")
            }
        } else if(day.toLowerCase() === "wednesday") {
            if(wednesdayFill === 'filled') {
                setWednesdayFill('empty')
                processDeleteWeekday("wednesday")
            } else {
                setWednesdayFill('filled')
                setDayOfRepeat(dayOfRepeat + ", wednesday")
            }
        } else if(day.toLowerCase() === "thursday") {
            if(thursdayFill === 'filled') {
                setThursdayFill('empty')
                processDeleteWeekday("thursday")
            } else {
                setThursdayFill('filled')
                setDayOfRepeat(dayOfRepeat + ", thursday")
            }
        } else if(day.toLowerCase() === "friday") {
            if(fridayFill === 'filled') {
                setFridayFill('empty')
                processDeleteWeekday("friday")
            } else {
                setFridayFill('filled')
                setDayOfRepeat(dayOfRepeat + ", friday")
            }
        } else if(day.toLowerCase() === "saturday") {
            if(saturdayFill === 'filled') {
                setSaturdayFill('empty')
                processDeleteWeekday("saturday")
            } else {
                setSaturdayFill('filled')
                setDayOfRepeat(dayOfRepeat + ", saturday")
            }
        }
        console.log(dayOfRepeat)
        return
    }

    const handleAddChecklistItem = () => {
        setChecklist(checklist + ", " + newChecklistItem)
        setNewChecklistItem('')
        return
    }

    const processDeleteTags = (item) => {
        const allTags = tags.split(", ")
        const checkExist = allTags.filter((tag) => tag.toLowerCase() === item.toLowerCase())
        // console.log(checkExist.length)
        if(checkExist.length !== 0) {
            const index = allTags.indexOf(item)
            allTags.splice(index, 1)
            const res = allTags.join(", ")
            setTags(res)
            // setTagsToDisplay(tags)
            return
        } else {
            return
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("submitting")

        // console.log(startDate.toDateString())
        // console.log(dailyData.start_date)
        const dateString = startDate.toDateString()
        const splitDateString = dateString.split(" ")
        const newMonth = stringToInt2(splitDateString)
        splitDateString.splice(1, 1, newMonth)
        // console.log("REACT DATE SPLIT: ", splitDateString)
        const dateInfo = `${splitDateString[2]} ${splitDateString[1]} ${splitDateString[3]}`
        // console.log("REACT DATE SPLIT: ", dateInfo)

        const newDaily = {
            title: title,
            notes: notes,
            checklist: checklist,
            difficulty: difficulty,
            start_date: dateInfo,
            repeats: repeats,
            num_repeats: numRepeats,
            day_of_repeat: dayOfRepeat,
            tags: tags,
            count: 0,
            status: "due"
        }
        // console.log("UPDATED HABIT: ", updatedDaily)

        dispatch(createNewDaily(newDaily))
        .then(async(res) => {
            if(res.message) {
                // console.log(res.message)
                setErrors("Title field is required.")
            } else {
                dispatch(getUserDailies())
                return onSubmit()
            }
        })
        // return onSubmit()
    }




    startDateDisplay = (
        <p id='start-date-text'>{startDate.toDateString()}</p>
    )


    if(showCal) {
        calDisplay = (
            <div id='react-calendar-container'>
                <Calendar onChange={setStartDate} value={startDate} />
            </div>
        )
    } else {
        calDisplay = (
            <div></div>
        )
    }

    if(repeats === "daily" || repeats === 'Daily') {
        repeatData = (
            <div>
                <div id='repeat-data-label'>
                    <label htmlFor='repeats'>Repeats</label>
                </div>
                <div>
                    <select id='repeat-data-selector' defaultValue={repeats} name='repeats' onChange={(e) => setRepeats(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <div id='repeat-every-label'>
                        <label htmlFor='repeat-every'>Repeat Every</label>
                    </div>
                    <div id='repeat-every-input'>
                        <input
                        id='repeat-number-input'
                            type="number"
                            name="repeat-every"
                            value={numRepeats}
                            onChange={(e) => setNumRepeats(e.target.value)}
                        /><div id='repeat-every-span'>{numRepeats === 1 ? "Day" : "Days"}</div>
                    </div>
                </div>
            </div>
        )
    } else if(repeats === "weekly" || repeats === "Weekly") {
        repeatData = (
            <div>
                <div id='repeat-data-label'>
                    <label htmlFor='repeats'>Repeats</label>

                </div>
                <div>
                    <select id='repeat-data-selector' defaultValue={repeats} name='repeats' onChange={(e) => setRepeats(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <div id='repeat-every-label'>
                        <label htmlFor='repeat-every'>Repeat Every</label>
                    </div>
                    <div id='repeat-every-input'>
                        <input
                        id='repeat-number-input'
                            type="number"
                            name="repeat-every"
                            value={numRepeats}
                            onChange={(e) => setNumRepeats(e.target.value)}
                        /><div id='repeat-every-span'>{numRepeats === 1 ? "Week" : "Weeks"}</div>
                    </div>
                </div>
                <div>
                    <div id='repeat-on-label'>
                        <label htmlFor='repat-days-of-week'>Repeat On</label>
                    </div>
                    <div id='weekdays-container'>
                        <div className='weekday' id={`dailies-sunday-${sundayFill}`} onClick={() => onWeekdayClick("sunday")}>Su</div>
                        <div className='weekday' id={`dailies-monday-${mondayFill}`} onClick={() => onWeekdayClick("monday")}>Mo</div>
                        <div className='weekday' id={`dailies-tuesday-${tuesdayFill}`} onClick={() => onWeekdayClick("tuesday")}>Tu</div>
                        <div className='weekday' id={`dailies-wednesday-${wednesdayFill}`} onClick={() => onWeekdayClick("wednesday")}>We</div>
                        <div className='weekday' id={`dailies-thursday-${thursdayFill}`} onClick={() => onWeekdayClick("thursday")}>Th</div>
                        <div className='weekday' id={`dailies-friday-${fridayFill}`} onClick={() => onWeekdayClick("friday")}>Fr</div>
                        <div className='weekday' id={`dailies-saturday-${saturdayFill}`} onClick={() => onWeekdayClick("saturday")}>Sa</div>
                    </div>
                </div>
            </div>
        )
    } else if(repeats === "monthly" || repeats === "Monthly") {
        repeatData = (
            <div>
                <div id='repeat-data-label'>
                    <label htmlFor='repeats'>Repeats</label>
                </div>
                <div>
                    <select id='repeat-data-selector' defaultValue={repeats} name='repeats' onChange={(e) => setRepeats(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <div id='repeat-every-label'>
                        <label htmlFor='repeat-every'>Repeat Every</label>
                    </div>
                    <div id='repeat-every-input'>
                        <input
                        id='repeat-number-input'
                            type="number"
                            name="repeat-every"
                            value={numRepeats}
                            onChange={(e) => setNumRepeats(e.target.value)}
                        /><div id='repeat-every-span'>{numRepeats === 1 ? "Month" : "Months"}</div>
                    </div>
                {/* </div> */}
                <div id='repeat-on-label'>

                    <label htmlFor='monthly-repeat-on'>Repeat On</label>
                </div>
                <div id='repeat-on-day-of-month'>
                    <input
                    type='radio'
                    name="monthly-repeat-on"
                    value="Day of the Month"
                    onChange={(e) => setDayOfRepeat(e.target.value)}
                    /><p>Day of the Month</p>

                </div>
                <div id='repeat-on-day-of-week'>

                    <input
                    type='radio'
                    name="monthly-repeat-on"
                    value="Day of the Week"
                    onChange={(e) => setDayOfRepeat(e.target.value)}
                    /><p>Day of the Week</p>

                </div>
                </div>
            </div>
        )
    } else {
        repeatData = (
            <div>
<div id='repeat-data-label'>
                    <label htmlFor='repeats'>Repeats</label>
                </div>
                <div>
                    <select id='repeat-data-selector' defaultValue={repeats} name='repeats' onChange={(e) => setRepeats(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <div id='repeat-every-label'>
                        <label htmlFor='repeat-every'>Repeat Every</label>
                    </div>
                    <div id='repeat-every-input'>
                        <input
                        id='repeat-number-input'
                            type="number"
                            name="repeat-every"
                            value={numRepeats}
                            onChange={(e) => setNumRepeats(e.target.value)}
                        /><div id='repeat-every-span'>{numRepeats === 1 ? "Year" : "Years"}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='habit-update-modal-backdrop' ref={modalOverlayRef}></div>
                <div className='update-habit-modal-wrapper'>
                    <div id='create-task-modal-colored'>
                        <div id='edit-habit-button-container'>
                            <div>
                                <h3 className='create-task-header-text'>Create Daily</h3>
                            </div>
                            <div>
                                <button id='reward-update-cancel-button' onClick={onClose}>Cancel</button>
                                <button id='daily-update-save-button' onClick={handleSubmit}>Create</button>
                            </div>
                        </div>
                        <div id='reward-title-container'>
                                <label htmlFor='title'>Title*</label>
                                <input
                                    type='text'
                                    name='title'
                                    id='reward-title-input-field'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Add a title"
                                />
                        </div>
                        <div id='reward-notes-container'>
                            <label htmlFor='notes'>Notes</label>
                            <textarea
                                name='notes'
                                id='reward-notes-input-field'
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Add notes"
                            />
                        </div>
                    </div>
                    <div id='daily-checklist-container'>
                        <div id='new-checklist-item-div'>
                            <img id='plus-icon' src="https://i.ibb.co/CB901y0/plus.png" alt="plus" border="0" />
                            <input
                                id='add-checklist-item-input'
                                type='text'
                                placeholder="New checklist item"
                                value={newChecklistItem}
                                onChange={(e) => setNewChecklistItem(e.target.value)}
                                onKeyPress={(e) => {
                                    if(e.key === 'Enter') {
                                        handleAddChecklistItem()
                                    } else {
                                        setNewChecklistItem(e.target.value)
                                    }
                                }}

                        />
                        </div>
                    {checklist?.split(", ").length ? checklist.split(", ").map(item => (
                        <div id='individual-checklist-item'>
                            <div>
                                <input
                                type='checkbox'
                                value={item}
                                onChange={() => processDeleteChecklistItem(item)}
                                /><span>{item}</span>
                            </div>
                            <div id='trashcan-container'>
                                <img onClick={() => processDeleteChecklistItem(item)} id='checklist-trashcan' src="https://i.ibb.co/2WtHztY/trash.png" alt="trash" border="0" />
                            </div>
                        </div>
                    )): ''}
                    </div>
                {/* <form onSubmit={handleSubmit}> */}

                    <div id='daily-update-difficulty-container'>
                        <label htmlFor='difficulty'>Difficulty</label>
                        {difficultyDisplay}
                        {difficultyDropdown}
                        {/* <div id='chosen-difficulty-display'>
                            <p>{difficulty}</p>
                        </div>
                        <div id={`difficulty-dropdown-container-${showDifficultyDropdown}`}>
                            <div className='difficulty-option-outer-container'>
                                <div className='individual-difficulty-option' onClick={() => setDifficulty("Trivial")}>
                                    <span>Trivial</span>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                </div>
                            </div>
                            <div className='difficulty-option-outer-container' onClick={() => setDifficulty("Easy")}>
                                <div>
                                    <span>Easy</span>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                </div>
                            </div>
                            <div className='difficulty-option-outer-container' onClick={() => setDifficulty("Medium")}>
                                <div>
                                    <span>Medium</span>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                </div>
                            </div>
                            <div className='difficulty-option-outer-container' onClick={() => setDifficulty("Hard")}>
                                <div>
                                    <span>Hard</span>
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                    <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
                                </div>
                            </div>

                        </div> */}
                        {/* <select
                            className='habit-difficulty-select'
                            value={difficulty}
                            // onChange={()}
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value="trivial">Trivial </option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select> */}
                    </div>
                    <div id='daily-start-date-container'>
                        <label htmlFor='start-date-calendar'>Start Date</label>
                        <div id='start-date-inner' onClick={() => showCal ? setShowCal(false) : setShowCal(true)}>
                            <div id='start-calendar-container'>
                                <img id='start-date-calendar-icon' src="https://i.ibb.co/B27L9Pb/calendar.png" alt="calendar" border="0" />
                            </div>
                            <div id='start-date-display-outer'>
                                {startDateDisplay}
                            </div>

                        </div>

                        {calDisplay}

                    </div>
                    <div id='repeat-data-wrapper'>{repeatData}</div>
                    <div id='tags-outer-wrapper'>
                            {/* <div id='tags-outer-wrapper'> */}

                                <div id='habit-tags-container' onClick={() => showTagDropdown === "hidden" ? setShowTagDropdown("visible") : setShowTagDropdown("hidden")}>
                                    <label id='tags-label'>Tags</label>
                                    <div id='edit-modal-tag-display'>
                                        {tags.length ? tags.split(", ").map(tag => (
                                            <div className='individual-tag-display'>{tag}<button className='tag-delete-x-button' onClick={() => processDeleteTags(tag)}>x</button></div>
                                        )) : <div className='individual-tag-display'>Add tags here...</div>}
                                    </div>
                                </div>
                                <div id={`difficulty-select-${showTagDropdown}`} multiple={true} value={[...tags]} onChange={(e) => processAddTags(e.target.value)}>
                                    <option className='tag-dropdown-option' value="Work">Work</option>
                                    <option className='tag-dropdown-option' value="Exercise">Exercise</option>
                                    <option className='tag-dropdown-option' value="Health + Wellness">Health + Wellness</option>
                                    <option className='tag-dropdown-option' value="School">School</option>
                                    <option className='tag-dropdown-option' value="Teams">Teams</option>
                                    <option className='tag-dropdown-option' value="Chores">Chores</option>
                                    <option className='tag-dropdown-option' value="Creativity">Creativity</option>
                                </div>
                            {/* </div> */}
                        </div>
                        {errors.length ? (<p id='create-task-error-text'>{errors}</p>) : ''}
                        <div id='edit-habit-bottom-container'>
                            <button id='create-task-bottom-create-button' onClick={handleSubmit}>Create</button>
                        </div>
            </div>
        </>
    )
}

export default CreateDailyModal;

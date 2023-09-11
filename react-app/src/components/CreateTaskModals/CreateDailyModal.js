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
    const [difficulty, setDifficulty] = useState('')
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

    let repeatData
    let calDisplay
    let startDateDisplay

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
        let dateInfo

        const dateString = startDate.toDateString()
        const splitDateString = dateString.split(" ")
        const newMonth = stringToInt2(splitDateString)
        splitDateString.splice(1, 1, newMonth)
        // console.log("REACT DATE SPLIT: ", splitDateString)
        dateInfo = `${splitDateString[2]} ${splitDateString[1]} ${splitDateString[3]}`
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
        .then(() => dispatch(getUserDailies()))
        return onSubmit()
    }


    startDateDisplay = (
        <p>{startDate.toDateString()}</p>
    )

    if(showCal) {
        calDisplay = (
            <div>
                <Calendar onChange={setStartDate} value={startDate} />
            </div>
        )
    } else {
        calDisplay = (
            <div></div>
        )
    }

    if(repeats.toLowerCase() === "daily") {
        repeatData = (
            <div>
                <div>
                    <label htmlFor='repeats'>Repeats</label>
                    <select defaultValue={repeats} name='repeats' onChange={(e) => setRepeats(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='repeat-every'>Repeat Every</label>
                    <input
                        type="number"
                        name="repeat-every"
                        value={numRepeats}
                        onChange={(e) => setNumRepeats(e.target.value)}
                    /><div>{numRepeats === 1 ? "Day" : "Days"}</div>
                </div>
            </div>
        )
    } else if(repeats.toLowerCase() === "weekly") {
        repeatData = (
            <div>
                <div>
                    <label htmlFor='repeats'>Repeats</label>
                    <select defaultValue={repeats} name='repeats' onChange={(e) => setRepeats(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='repeat-every'>Repeat Every</label>
                    <input
                        type="number"
                        name="repeat-every"
                        value={numRepeats}
                        onChange={(e) => setNumRepeats(e.target.value)}
                    /><div>{numRepeats === 1 ? "Week" : "Weeks"}</div>
                </div>
                <div>
                    <label htmlFor='repat-days-of-week'>Repeat On</label>
                    <div>
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
    } else if(repeats.toLowerCase() === "monthly") {
        repeatData = (
            <div>
                <div>
                    <label htmlFor='repeats'>Repeats</label>
                    <select defaultValue={repeats} name='repeats' onChange={(e) => setRepeats(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='repeat-every'>Repeat Every</label>
                    <input
                        type="number"
                        name="repeat-every"
                        value={numRepeats}
                        onChange={(e) => setNumRepeats(e.target.value)}
                    /><div>{numRepeats === 1 ? "Month" : "Months"}</div>
                </div>
                <div>
                    <label htmlFor='monthly-repeat-on'>Repeat On</label>
                    <input
                    type='radio'
                    name="monthly-repeat-on"
                    value="Day of the Month"
                    onChange={(e) => setDayOfRepeat(e.target.value)}
                    /><p>Day of the Month</p>

                    <input
                    type='radio'
                    name="monthly-repeat-on"
                    value="Day of the Week"
                    onChange={(e) => setDayOfRepeat(e.target.value)}
                    /><p>Day of the Week</p>
                </div>
            </div>
        )
    } else {
        repeatData = (
            <div>
                <div>
                    <label htmlFor='repeats'>Repeats</label>
                    <select defaultValue={repeats} name='repeats' onChange={(e) => setRepeats(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='repeat-every'>Repeat Every</label>
                    <input
                        type="number"
                        name="repeat-every"
                        value={numRepeats}
                        onChange={(e) => setNumRepeats(e.target.value)}
                    /><div>{numRepeats === 1 ? "Year" : "Years"}</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='habit-update-modal-backdrop' ref={modalOverlayRef}></div>
            <div className='update-habit-modal-wrapper'>
                <h3>Create Daily</h3><button onClick={onClose}>Cancel</button><button type='submit' onClick={handleSubmit}>Save</button>
                <input
                        type='text'
                        placeholder="Add a checklist item"
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
                {checklist?.split(", ").length ? checklist.split(", ").map(item => (
                    <div>
                        <input
                        type='checkbox'
                        value={item}
                        onChange={() => processDeleteChecklistItem(item)}
                        /><span>{item}</span><button onClick={() => processDeleteChecklistItem(item)}>x</button>
                    </div>
                )): ''}
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* <button type='submit'>Save</button> */}
                    </div>
                    <div>
                        <label htmlFor='title'>Title*</label>
                        <input
                            type='text'
                            name='title'
                            id='create-habit-title-input-field'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='notes'>Notes</label>
                        <input
                            type='textarea'
                            name='notes'
                            id='create-habit-notes-input-field'
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='difficulty'>Difficulty</label>
                        <select
                            className='habit-difficulty-select'
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value="trivial">Trivial</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='start-date-calendar'>Start Date</label>
                        <div onClick={() => showCal ? setShowCal(false) : setShowCal(true)}>{startDateDisplay}</div>
                        {/* <div onClick={() => showCal ? setShowCal(false) : setShowCal(true)}>Cal</div> */}
                        {calDisplay}
                        {/* {showCal ? (<Calendar onChange={(e) => setStartDate(e.target.value)} value={startDate} />) : ''} */}
                        {/* <Calendar onChange={(e) => setStartDate(e.target.value)} value={startDate} /> */}

                    </div>
                    <div>{repeatData}</div>
                    <div>
                        <div>
                            <div>
                                {tags.length ? tags.split(", ").map(tag => (
                                    <div>{tag}<button onClick={() => processDeleteTags(tag)}>x</button></div>
                                )) : <div>Add tags here...</div>}
                            </div>
                            <select multiple={true} value={[...tags]} onChange={(e) => setTags(tags + ", " + e.target.value)}>
                                <option value="Work">Work</option>
                                <option value="Exercise">Exercise</option>
                                <option value="Health + Wellness">Health + Wellness</option>
                                <option value="School">School</option>
                                <option value="Teams">Teams</option>
                                <option value="Chores">Chores</option>
                                <option value="Creativity">Creativity</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateDailyModal;

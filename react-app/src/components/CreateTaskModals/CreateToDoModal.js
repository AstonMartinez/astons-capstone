import React, { useState, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getUserToDos, createNewToDo } from '../../store/todos'
import Calendar from 'react-calendar'
import { stringToInt2 } from '../Dailies/DateFunctions'

const CreateToDoModal = ({ onSubmit, onClose }) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [difficulty, setDifficulty] = useState("Easy")
    const [tags, setTags] = useState('')
    const today = new Date()
    const [dueDate, setDueDate] = useState(today)
    const [errors, setErrors] = useState([])
    const [showCal, setShowCal] = useState(false)
    const [checklist, setChecklist] = useState('')
    const [newChecklistItem, setNewChecklistItem] = useState('')
    const [status, setStatus] = useState("incomplete")
    const [showTagDropdown, setShowTagDropdown] = useState("hidden")
    const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false)

    let calDisplay
    let dueDateDisplay

    const trivialOption = (
        <div className='difficulty-option-outer-container' onClick={() => {
            setDifficulty("Trivial")
            setShowDifficultyDropdown(false)
            }}>
            <div className='individual-difficulty-option'>
                <span>Trivial</span>
            </div>
            <div>
                <img src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" style={{"height": "12px"}} />
            </div>
        </div>
    )

    const easyOption = (
        <div className='difficulty-option-outer-container'  onClick={() => {
            setDifficulty("Easy")
            setShowDifficultyDropdown(false)
            return
            }}>
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
        <div className='difficulty-option-outer-container'  onClick={() => {
            setDifficulty("Medium")
            setShowDifficultyDropdown(false)}}>
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
        <div className='difficulty-option-outer-container'  onClick={() => {
            setDifficulty("Hard")
            setShowDifficultyDropdown(false)
            }}>
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

    // console.log("DUE DATE: ", dueDate)

    // const handleClickOutside = useCallback((e) => {
    //     if (modalOverlayRef.current === e.target) {
    //         onClose();
    //     }
    // }, [onClose]);

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside)
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside)
    //     }
    // }, [handleClickOutside])

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

        if(!title) {
            setErrors("Please enter a title for this To-Do.")
            return
        }
        // console.log("submitting")
        const dateString = dueDate.toDateString()
        const splitDateString = dateString.split(" ")
        const newMonth = stringToInt2(splitDateString)
        splitDateString.splice(1, 1, newMonth)
        // console.log("REACT DATE SPLIT: ", splitDateString)
        const dateInfo = `${splitDateString[2]} ${splitDateString[1]} ${splitDateString[3]}`

        const newToDo = {
            title: title,
            notes: notes,
            checklist: checklist,
            difficulty: difficulty,
            due_date: dateInfo,
            tags: tags,
            status: status
        }
        // console.log("UPDATED HABIT: ", updatedDaily)

        dispatch(createNewToDo(newToDo))
        .then(async(res) => {
            if(res.message) {
                // console.log(res.message)
                setErrors("Title field is required.")
            } else {
                dispatch(getUserToDos())
                return onSubmit()
            }
        })
    }



    dueDateDisplay = (
        <p>{dueDate.toDateString()}</p>
    )


    if(showCal) {
        calDisplay = (
            <div id='react-calendar-container'>
                <Calendar onChange={(date) => {
                    setShowCal(false)
                    setDueDate(date)
                    }} value={dueDate} />
            </div>
        )
    } else {
        calDisplay = ''
    }

    return (
        <>
            <div className='habit-update-modal-backdrop' ref={modalOverlayRef}></div>
                <div className='update-habit-modal-wrapper'>
                    <div id='create-task-modal-colored'>
                        <div id='edit-habit-button-container'>
                            <div>
                                <h3 className='create-task-header-text'>Create To-Do</h3>
                            </div>
                            <div>
                                <button id='reward-update-cancel-button' onClick={onClose}>Cancel</button>
                                <button id='daily-update-save-button' onClick={handleSubmit}>Save</button>
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
                        {errors ? (<p id='no-title-error'>{errors}</p>) : ''}
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
                    <div id='daily-update-difficulty-container'>
                        <label htmlFor='difficulty'>Difficulty</label>
                        {difficultyDisplay}
                        {difficultyDropdown}
                        {/* <select
                            className='habit-difficulty-select'
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value="trivial">Trivial</option>
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
                                {dueDateDisplay}
                            </div>

                        </div>

                        {calDisplay}

                    </div>
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
                                <select id={`difficulty-select-${showTagDropdown}`} multiple={true} value={[...tags]} onChange={(e) => processAddTags(e.target.value)}>
                                    <option className='tag-dropdown-option' value="Work">Work</option>
                                    <option className='tag-dropdown-option' value="Exercise">Exercise</option>
                                    <option className='tag-dropdown-option' value="Health + Wellness">Health + Wellness</option>
                                    <option className='tag-dropdown-option' value="School">School</option>
                                    <option className='tag-dropdown-option' value="Teams">Teams</option>
                                    <option className='tag-dropdown-option' value="Chores">Chores</option>
                                    <option className='tag-dropdown-option' value="Creativity">Creativity</option>
                                </select>
                            {/* </div> */}
                        </div>
                        {errors.length ? (<p id='create-task-error-text'>{errors}</p>) : ''}
                    <div id='edit-habit-bottom-container'>
                        <button id='create-task-bottom-create-button' onClick={handleSubmit}>Create</button>
                    </div>
            {/* // </div> */}
            </div>
        </>
    )
}

export default CreateToDoModal;

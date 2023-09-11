import React, { useState, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUserToDo, getOneToDo, getUserToDos, updateUserToDo } from '../../store/todos'
import Calendar from 'react-calendar'
import { stringToInt, stringToInt2 } from '../Dailies/DateFunctions'

const ToDoUpdateDeleteModal = ({ onSubmit, onClose, toDoId, toDoData }) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const [title, setTitle] = useState(toDoData.title)
    const [notes, setNotes] = useState(toDoData.notes)
    const [difficulty, setDifficulty] = useState(toDoData.difficulty)
    const [tags, setTags] = useState(toDoData.tags)
    const [dueDate, setDueDate] = useState(toDoData.due_date)
    const [errors, setErrors] = useState([])
    const [showCal, setShowCal] = useState(false)
    const [checklist, setChecklist] = useState(toDoData.checklist)
    const [newChecklistItem, setNewChecklistItem] = useState('')
    const [status, setStatus] = useState(toDoData.status)

    let calDisplay
    let dueDateDisplay

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
        // console.log("submitting")
        let dateInfo
        // console.log(startDate.toDateString())
        // console.log(dailyData.start_date)

        if(dueDate === toDoData.due_date) {
            const dateArr = dueDate.split(" ")
            // console.log("START DATE SPLIT: ", dateArr)
            const newMonth = stringToInt(dateArr)
            dateArr.splice(2, 1, newMonth)
            // console.log("FINAL: ", `${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`) // "23 09 2023"
            dateInfo = `${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`
            // console.log("START DATE === ")
            // console.log(dateInfo)

        } else {
            const dateString = dueDate.toDateString()
            const splitDateString = dateString.split(" ")
            const newMonth = stringToInt2(splitDateString)
            splitDateString.splice(1, 1, newMonth)
            // console.log("REACT DATE SPLIT: ", splitDateString)
            dateInfo = `${splitDateString[2]} ${splitDateString[1]} ${splitDateString[3]}`
            // console.log("REACT DATE SPLIT: ", dateInfo)
        }
        const updatedToDo = {
            title: title,
            notes: notes,
            checklist: checklist,
            difficulty: difficulty,
            due_date: dateInfo,
            tags: tags,
            status: status
        }
        // console.log("UPDATED HABIT: ", updatedDaily)

        dispatch(updateUserToDo(toDoId, updatedToDo))
        .then(() => dispatch(getUserToDos()))
        return onSubmit()
    }

    const handleDeleteToDo = async () => {
        dispatch(deleteUserToDo(toDoId)).then(async res => {
            if(res.errors) {
                setErrors(res.errors)
            } else {
                dispatch(getUserToDos())
            }
        })
        return onClose()
    }

    if(dueDate === toDoData.due_date) {
        dueDateDisplay = (
            <p>{dueDate}</p>
        )
    } else {
        dueDateDisplay = (
            <p>{dueDate.toDateString()}</p>
        )
    }

    if(showCal) {
        calDisplay = (
            <div>
                <Calendar onChange={setDueDate} value={dueDate} />
            </div>
        )
    } else {
        calDisplay = ''
    }

    return (
        <>
            <div className='habit-update-modal-backdrop' ref={modalOverlayRef}></div>
            <div className='update-habit-modal-wrapper'>
                <h3>Edit To-Do</h3><button onClick={onClose}>Cancel</button><button type='submit' onClick={handleSubmit}>Save</button>
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
                            id='habit-title-input-field'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='notes'>Notes</label>
                        <input
                            type='textarea'
                            name='notes'
                            id='habit-notes-input-field'
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
                        <label htmlFor='due-date-calendar'>Due Date</label>
                        <div onClick={() => showCal ? setShowCal(false) : setShowCal(true)}>{dueDateDisplay}</div>
                        {/* <div onClick={() => showCal ? setShowCal(false) : setShowCal(true)}>Cal</div> */}
                        {calDisplay}
                        {/* {showCal ? (<Calendar onChange={(e) => setStartDate(e.target.value)} value={startDate} />) : ''} */}
                        {/* <Calendar onChange={(e) => setStartDate(e.target.value)} value={startDate} /> */}

                    </div>
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
                <button onClick={handleDeleteToDo}>Delete this To-Do</button>
            </div>
        </>
    )
}

export default ToDoUpdateDeleteModal;

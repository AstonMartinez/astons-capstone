import React, { useState, useEffect, useRef, useCallback } from 'react'
import { updateUserHabit, getUserHabits, deleteUserHabit } from '../../store/habits'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'

const UpdateHabitModal = ({ onSubmit, onClose, habitId, habitData }) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const [title, setTitle] = useState(habitData.title)
    const [notes, setNotes] = useState(habitData.notes)
    const [type, setType] = useState(habitData.type)
    const [difficulty, setDifficulty] = useState(habitData.difficulty)
    const [tags, setTags] = useState(habitData.tags)
    const [errors, setErrors] = useState([])
    // const [positiveFill, setPositiveFill] = useState(false)
    // const [negativeFill, setNegativeFill] = useState(false)

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
        const updatedHabit = {
            title: title,
            notes: notes,
            type: type,
            difficulty: difficulty,
            tags: tags
        }
        // console.log("UPDATED HABIT: ", updatedHabit)

        dispatch(updateUserHabit(habitId, updatedHabit))
        .then(() => dispatch(getUserHabits()))
        return onSubmit()
    }

    const handleDeleteHabit = async () => {
        dispatch(deleteUserHabit(habitId)).then(async res => {
            if(res.errors) {
                setErrors(res.errors)
            } else {
                dispatch(getUserHabits())
            }
        })
        return onClose()
    }

    return (
        <>
            <div className='habit-update-modal-backdrop'></div>
            <div className='update-habit-modal-wrapper' ref={modalOverlayRef}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>Edit Habit</h3>
                        <button>Cancel</button>
                        <button type='submit'>Save</button>
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
                        <div>
                            <button className={`habit-pos-button`}>+</button>
                            <p>Positive</p>
                        </div>
                        <div>
                            <button className={`habit-neg-button`}>-</button>
                            <p>Negative</p>
                        </div>
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
                <button onClick={handleDeleteHabit}>Delete this Habit</button>
            </div>
        </>
    )
}

export default UpdateHabitModal;

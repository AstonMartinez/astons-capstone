import './CreateTaskModals.css'
import React, { useState, useRef, useCallback } from 'react'
import { createNewHabit, getUserHabits } from '../../store/habits'
import { useDispatch } from 'react-redux'

const CreateHabitModal = ({onSubmit, onClose}) => {
        const dispatch = useDispatch()
        const modalOverlayRef = useRef()
        const [title, setTitle] = useState('')
        const [notes, setNotes] = useState('')
        const [type, setType] = useState('')
        const [difficulty, setDifficulty] = useState('')
        const [tags, setTags] = useState('')
        const [errors, setErrors] = useState([])
        const [status, setStatus] = useState("regular")

        const [positiveFill, setPositiveFill] = useState("empty")
        const [negativeFill, setNegativeFill] = useState("empty")

        const processDeleteTags = (item) => {
            const allTags = tags.split(", ")
            const checkExist = allTags.filter((tag) => tag.toLowerCase() === item.toLowerCase())
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

        const handleSubmit = async (e) => {
            e.preventDefault()
            // console.log("submitting")
            const newHabit = {
                title: title,
                notes: notes,
                type: type,
                difficulty: difficulty,
                pos_count: 0,
                neg_count: 0,
                status: status,
                tags: tags
            }
            // console.log("UPDATED HABIT: ", updatedHabit)

            dispatch(createNewHabit(newHabit))
            .then(() => dispatch(getUserHabits()))
            return onSubmit()
        }

        const handlePosButtonClick = () => {
            if(positiveFill === "filled") {
                if(type === "positive") {
                    setType("")
                    setPositiveFill("empty")
                    return
                } else if(type === "positive, negative") {
                    setType("negative")
                    setPositiveFill("empty")
                    return
                }
            } else {
                if(type === "negative") {
                    setType("positive, negative")
                    setPositiveFill("filled")
                    return
                } else if(type === "") {
                    setType("positive")
                    setPositiveFill("filled")
                    return
                }
            }
        }

        const handleNegButtonClick = () => {
            if(negativeFill === "filled") {
                if(type === "negative") {
                    // console.log("type is neg")
                    setType("")
                    setNegativeFill("empty")
                    return
                } else if(type === "positive, negative") {
                    // console.log("type is pos,neg")
                    setType("positive")
                    setNegativeFill("empty")
                    return
                }
            } else {
                if(type === "positive") {
                    setType("positive, negative")
                    setNegativeFill("filled")
                    return
                } else if(type === "") {
                    setType("negative")
                    setNegativeFill("filled")
                    return
                }
            }
        }

        return (
            <>
                <div className='habit-update-modal-backdrop'  ref={modalOverlayRef}></div>
                    <div className='update-habit-modal-wrapper'>
                        <div id={`create-habit-modal-colored`}>
                            <div id='create-habit-button-container'>
                                <div>
                                    <h3>Create Habit</h3>
                                </div>
                                <div>
                                    <button id={`habit-cretae-cancel-button`} onClick={onClose}>Cancel</button>
                                    <button id={`habit-create-save-button`} onClick={handleSubmit}>Save</button>
                                </div>
                            </div>
                                <div id={`habit-title-container`}>
                                    <label htmlFor='title'>Title*</label>
                                    <input
                                        type='text'
                                        name='title'
                                        id={`create-habit-title-input-field`}
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div id={`habit-notes-container`}>
                                    <label htmlFor='notes'>Notes</label>
                                    <input
                                        type='textarea'
                                        name='notes'
                                        id={`create-habit-notes-input-field`}
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        placeholder="Add notes"
                                    />
                                </div>
                        </div>
                            <div id='pos-neg-button-container'>
                                <div id='positive-button-and-label'>
                                    <button className={`create-habit-pos-button-${positiveFill}`} onClick={handlePosButtonClick}>+</button>
                                    <p>Positive</p>
                                </div>
                                <div id='negative-button-and-label'>
                                    <button className={`create-habit-neg-button-${negativeFill}`} onClick={handleNegButtonClick}>-</button>
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
                                    <select multiple={true} value={[...tags]} onChange={(e) => processAddTags(e.target.value)}>
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
                    </div>

            {/* </div> */}
        </>
    )
}

export default CreateHabitModal;

import React, { useState, useRef, useCallback } from 'react'
import { updateUserHabit, getUserHabits, deleteUserHabit } from '../../store/habits'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import './UpdateHabitModal.css'

const UpdateHabitModal = ({ onSubmit, onClose, habitId, habitData, fillType }) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const [title, setTitle] = useState(habitData.title)
    const [notes, setNotes] = useState(habitData.notes)
    const [type, setType] = useState(habitData.type)
    const [difficulty, setDifficulty] = useState(habitData.difficulty)
    const [tags, setTags] = useState(habitData.tags)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(habitData.status)
    console.log("TOP FILL: ", fillType)
    const [showTagDropdown, setShowTagDropdown] = useState("hidden")
    const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false)

    const determineTopFill = () => {
        if(habitData.status === "strong") {
            return "green"
        } else if(habitData.status === "regular") {
            return "orange"
        } else {
            return "dark-orange"
        }
    }

    const initFill = determineTopFill()
    console.log(initFill)


    const [topFill, setTopFill] = useState(initFill)

    const determinePosFill = () => {
        if(habitData.type === "positive" || habitData.type === "positive, negative") {
            return "filled"
        } else {
            return "empty"
        }
    }

    const determineNegFill = () => {
        if(habitData.type === "negative" || habitData.type === "positive, negative") {
            return "filled"
        } else {
            return "empty"
        }
    }

    const initialPosButtonFill = determinePosFill()
    const initialNegButtonFill = determineNegFill()

    // const [posButtonFill, setPosButtonFill] = useState()
    const [positiveFill, setPositiveFill] = useState(initialPosButtonFill)
    const [negativeFill, setNegativeFill] = useState(initialNegButtonFill)

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

    const getUpdatedStatus = (incrementedVal) => {
        if(habitData.type === "positive") {
            if(incrementedVal >= 1) {
                setStatus("strong")
                setTopFill("green")
                return "strong"
            } else {
                setStatus("regular")
                setTopFill("orange")
                return "regular"
            }
        } else if(habitData.type === "positive, negative") {
            if(incrementedVal > habitData.neg_count) {
                setStatus("strong")
                setTopFill("green")
                return
            } else if(incrementedVal === habitData.neg_count) {
                setStatus("regular")
                setTopFill("orange")
                return
            }
        } else {
            setStatus("weak")
            setTopFill("dark-orange")
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
            pos_count: habitData.pos_count,
            neg_count: habitData.neg_count,
            status: status,
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
                console.log("type is neg")
                setType("")
                setNegativeFill("empty")
                return
            } else if(type === "positive, negative") {
                console.log("type is pos,neg")
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
                    <div id={`update-habit-modal-colored-${topFill}`}>
                        <div id='edit-habit-button-container'>
                            <div>
                                <h3>Edit Habit</h3>
                            </div>
                            <div>
                                <button id={`habit-update-cancel-button`} onClick={onClose}>Cancel</button>
                                <button id={`habit-update-save-button-${topFill}`} onClick={handleSubmit}>Save</button>
                            </div>
                        </div>
                            <div id={`habit-title-container`}>
                                <label htmlFor='title'>Title*</label>
                                <input
                                    type='text'
                                    name='title'
                                    id={`habit-title-input-field-${topFill}`}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div id={`habit-notes-container`}>
                                <label htmlFor='notes'>Notes</label>
                                <textarea
                                    name='notes'
                                    id={`habit-notes-input-field-${topFill}`}
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Add notes"
                                />
                            </div>
                    </div>
                        <div id='pos-neg-button-container'>
                            <div id='positive-button-and-label'>
                                <button className={`habit-pos-button-${positiveFill}-${topFill}`} onClick={handlePosButtonClick}>+</button>
                                <p>Positive</p>
                            </div>
                            <div id='negative-button-and-label'>
                                <button className={`habit-neg-button-${negativeFill}-${topFill}`} onClick={handleNegButtonClick}>-</button>
                                <p>Negative</p>
                            </div>
                        </div>
                        <div id='habit-update-difficulty-container'>
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
                        <div id='edit-habit-bottom-container' onClick={handleDeleteHabit}>
                            <img id='trash-can-icon' src="https://i.ibb.co/2WtHztY/trash.png" alt="trash" border="0" /><p id='edit-habit-submit-trashcan'>Delete this Habit</p>
                        </div>
                </div>

            {/* </div> */}
        </>
    )
}

export default UpdateHabitModal;

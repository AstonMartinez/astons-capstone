import './CreateTaskModals.css'
import React, { useState, useRef, useCallback } from 'react'
import { createNewHabit, getUserHabits } from '../../store/habits'
import { useDispatch } from 'react-redux'

const CreateHabitModal = ({onSubmit, onClose}) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [type, setType] = useState("positive, negative")
    const [difficulty, setDifficulty] = useState('Easy')
    const [tags, setTags] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState("regular")

    const [showTagDropdown, setShowTagDropdown] = useState("hidden")
    const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false)

    // const [posButtonFill, setPosButtonFill] = useState()
    const [positiveFill, setPositiveFill] = useState("filled")
    const [negativeFill, setNegativeFill] = useState("filled")

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
        if(!title) {
            setErrors("Please enter a title for this Habit.")
            return
        }
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

        dispatch(createNewHabit(newHabit))
        .then(async(res) => {
            if(res.message) {
                setErrors("Title field is required.")
            } else {
                dispatch(getUserHabits())
                return onSubmit()
            }
        })

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
                setType("")
                setNegativeFill("empty")
                return
            } else if(type === "positive, negative") {
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
                    <div id={`create-task-modal-colored`}>
                        <div id='edit-habit-button-container'>
                            <div>
                                <h3 className='create-task-header-text'>Create Habit</h3>
                            </div>
                            <div >
                                <button id={`reward-update-cancel-button`} onClick={onClose}>Cancel</button>
                                <button id={`daily-update-save-button`} onClick={handleSubmit}>Create</button>
                            </div>
                        </div>
                            <div id={`reward-title-container`}>
                                <label htmlFor='title'>Title*</label>
                                <input
                                    type='text'
                                    name='title'
                                    id={`reward-title-input-field`}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder='Add a title'
                                />
                            </div>
                            {errors ? (<p id='no-title-error'>{errors}</p>) : ''}
                            <div id={`reward-notes-container`}>
                                <label htmlFor='notes'>Notes</label>
                                <textarea
                                    name='notes'
                                    id={`reward-notes-input-field`}
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
                        {errors.length ? (<p id='create-task-error-text'>{errors}</p>) : ''}
                        <div id='edit-habit-bottom-container'>
                            <button id='create-task-bottom-create-button' onClick={handleSubmit}>Create</button>
                        </div>
                </div>

            {/* </div> */}
        </>
    )
}
export default CreateHabitModal;

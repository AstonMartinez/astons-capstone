import React, { useState, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUserReward, getUserRewards, updateUserReward } from '../../store/rewards'

const UpdateDeleteRewardModal = ({ onSubmit, onClose, rewardId, rewardData }) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const [title, setTitle] = useState(rewardData.title)
    const [notes, setNotes] = useState(rewardData.notes)
    const [cost, setCost] = useState(rewardData.cost)
    const [tags, setTags] = useState(rewardData.tags)
    const [errors, setErrors] = useState([])
    const [showTagDropdown, setShowTagDropdown] = useState("hidden")
    const [titleError, setTitleError] = useState('')
    const [rewardCostError, setRewardCostError] = useState('')

    const processDeleteTags = (item) => {
        const allTags = tags.split(", ")
        const checkExist = allTags.filter((tag) => tag.toLowerCase() === item.toLowerCase())
        if(checkExist.length !== 0) {
            const index = allTags.indexOf(item)
            allTags.splice(index, 1)
            const res = allTags.join(", ")
            setTags(res)
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
            setTitleError("Please enter a title for this Reward.")
            return
        }

        if(cost > 1000) {
            setErrors("Please choose a value that is less than or equal to 1,000")
            return
        }

        if(cost <= 0) {
            setRewardCostError("Please choose a value that is between 1 and 1,000")
            return
        }

        const updatedReward = {
            title: title,
            notes: notes,
            cost: cost,
            tags: tags
        }

        dispatch(updateUserReward(rewardId, updatedReward))
        .then(() => dispatch(getUserRewards()))
        return onSubmit()
    }

    const handleDeleteReward = async () => {
        dispatch(deleteUserReward(rewardId)).then(async res => {
            if(res.errors) {
                setErrors(res.errors)
            } else {
                dispatch(getUserRewards())
            }
        })
        return onClose()
    }

    return (
        <>
            <div className='habit-update-modal-backdrop'  ref={modalOverlayRef}></div>
                <div className='update-habit-modal-wrapper'>
                    <div id={`reward-update-modal-colored`}>
                        <div id='edit-habit-button-container'>
                            <div id='edit-reward-header-text'>
                                <h3>Edit Reward</h3>
                            </div>
                            <div>
                                <button id={`reward-update-cancel-button`} onClick={onClose}>Cancel</button>
                                <button id={`daily-update-save-button`} onClick={handleSubmit}>Save</button>
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
                            />

                        </div>
                        {titleError ? (<p id='no-title-error'>{titleError}</p>) : ''}

                        <div id={`reward-notes-container`}>
                            <label htmlFor='notes'>Notes</label>
                            <input
                                type='textarea'
                                name='notes'
                                id={`reward-notes-input-field`}
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Add notes"
                            />
                            {/* {errors ? (<p id='reward-cost-error-text'>{errors}</p>) : ''} */}
                        </div>
                    </div>
                    <div id='reward-cost-container'>
                        <label htmlFor='cost'>Cost</label>
                        <div id='reward-cost-inner'>
                            <div id='reward-coin-holder'>
                                <div className='coin-circle'>
                                    <div className='inner-coin-circle'><p>Q</p></div>
                                </div>
                            </div>
                            <div id='rci-outer'>
                                <input
                                    name='cost'
                                    id='reward-cost-input'
                                    type='number'
                                    value={cost}
                                    onChange={(e) => setCost(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    {errors ? (<p id='reward-cost-error-text'>{errors}</p>) : ''}
                    {rewardCostError ? (<p id='reward-cost-error-text'>{rewardCostError}</p>) : ''}
                        {/* <div> */}
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
                        </div>
                        <div id='edit-reward-bottom-container' onClick={handleDeleteReward}>
                            <img id='trash-can-icon' src="https://i.ibb.co/2WtHztY/trash.png" alt="trash" border="0" /><p id='edit-habit-submit-trashcan'>Delete this Reward</p>
                        </div>
                </div>

            {/* </div> */}
        </>
    )
}

export default UpdateDeleteRewardModal;

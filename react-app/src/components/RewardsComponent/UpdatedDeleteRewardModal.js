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

    // const handleClickOutside = useCallback((e) => {
    //     e.preventDefault()
    //     if (modalOverlayRef.current === e.target) {
    //         onClose()
    //     } else {
    //         return
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
                    <div id={`update-reward-modal-colored`}>
                        <div id='edit-habit-button-container'>
                            <div>
                                <h3>Edit Reward</h3>
                            </div>
                            <div>
                                <button id={`reward-update-cancel-button`} onClick={onClose}>Cancel</button>
                                <button id={`reward-update-save-button`} onClick={handleSubmit}>Save</button>
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
                        </div>
                    </div>
                    <div>
                        <label htmlFor='cost'>Cost</label>
                        <input
                            name='cost'
                            id='reward-cost-input'
                            type='number'
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                        />
                    </div>
                        <div>
                            <div>
                                <div>
                                    {tags !== undefined && tags.length > 0 ? tags?.split(", ")?.map(tag => (
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
                    <button onClick={handleDeleteReward}>Delete this Reward</button>
                </div>

            {/* </div> */}
        </>
    )
}

export default UpdateDeleteRewardModal;

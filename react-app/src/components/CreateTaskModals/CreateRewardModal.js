import './CreateTaskModals.css'
import React, { useState, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getUserRewards, createNewReward } from '../../store/rewards'

const CreateRewardModal = ({ onSubmit, onClose }) => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [cost, setCost] = useState(10)
    const [tags, setTags] = useState('')
    const [errors, setErrors] = useState([])


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
        const newReward = {
            title: title,
            notes: notes,
            cost: cost,
            tags: tags
        }

        dispatch(createNewReward(newReward))
        .then(() => dispatch(getUserRewards()))
        return onSubmit()
    }

    return (
        <>
            <div className='habit-update-modal-backdrop'  ref={modalOverlayRef}></div>
                <div className='update-habit-modal-wrapper'>
                    <div id={`update-reward-modal-colored`}>
                        <div id='edit-habit-button-container'>
                            <div>
                                <h3>Create Reward</h3>
                            </div>
                            <div>
                                <button id={`reward-create-cancel-button`} onClick={onClose}>Cancel</button>
                                <button id={`reward-create-save-button`} onClick={handleSubmit}>Save</button>
                            </div>
                        </div>
                        <div id={`create-reward-title-container`}>
                            <label htmlFor='title'>Title*</label>
                            <input
                                type='text'
                                name='title'
                                id={`create-reward-title-input-field`}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div id={`reward-notes-container`}>
                            <label htmlFor='notes'>Notes</label>
                            <input
                                type='textarea'
                                name='notes'
                                id={`cretae-reward-notes-input-field`}
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
                            id='create-reward-cost-input'
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
                </div>

            {/* </div> */}
        </>
    )
}

export default CreateRewardModal;

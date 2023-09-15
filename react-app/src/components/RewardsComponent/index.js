import './Rewards.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewReward, getUserRewards } from '../../store/rewards'
import { Redirect } from 'react-router-dom'
import IndividualReward from './IndividualReward'

const RewardsComponent = () => {
    const dispatch = useDispatch()
    const allRewards = useSelector(state => state.rewards.allRewards)
    const [rewardName, setRewardName] = useState('')
    const [errors, setErrors] = useState([])

    const rewardsToMap = Object.values(allRewards)

    useEffect(() => {
        dispatch(getUserRewards())
    }, [dispatch])

    const rewardTitleReset = () => {
        setRewardName('')
    }

    const validateTitle = (title) => {
        if(rewardName.length > 255) {
            setErrors(["A reward title must be 255 characters or less."])
            // console.log("ERRORS: *******************", errors)
            return false
        }
        return true
    }

    const handleDispatch = async(e) => {
        e.preventDefault()
        const newReward = {
            title: rewardName,
            notes: '',
            cost: 10,
            tags: ''
        }
        dispatch(createNewReward(newReward)).then(() => {
            rewardTitleReset()
            setErrors([])
            dispatch(getUserRewards())
            return <Redirect to='/my-dashboard' />
        })
    }

    const formNewReward = async(e) => {
        e.preventDefault()
        const result = validateTitle(rewardName)
        if(result === true) {
            handleDispatch(e)
            return
        } else {
            return
        }
    }

    // const handleNewRewardEnter = () => {
    //     const newReward = {
    //         title: rewardName,
    //         notes: '',
    //         cost: 10,
    //         tags: ''
    //     }
    //     dispatch(createNewReward(newReward)).then(() => {
    //         rewardTitleReset()
    //         return <Redirect to='/my-dashboard' />
    //     })
    // }


    return (
        <div id='rewards-column-wrapper'>
            <h2 className='column-h2'>Rewards</h2>
            <div id='rewards-column'>
                <form onSubmit={formNewReward}>
                    <input
                    name='new-reward'
                    id='new-habit-title-input'
                    value={rewardName}
                    onChange={(e) => setRewardName(e.target.value)}
                    placeholder='Add a Reward'
                    onKeyPress={(e) => {
                        if(e.key === 'Enter') {
                            formNewReward(e)
                        } else {
                            setRewardName(e.target.value)
                        }
                    }}
                    />
                    {errors.length ? (<div id='reward-enter-form-error'><p id='create-task-error-text'>{errors[0]}</p></div>): ''}
                </form>
                <div>
                    {rewardsToMap && rewardsToMap.map(reward => (
                        <div id='single-reward-container'>
                            <IndividualReward rewardData={reward} key={reward.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RewardsComponent;

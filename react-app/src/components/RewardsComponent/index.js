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

    const rewardsToMap = Object.values(allRewards)

    useEffect(() => {
        dispatch(getUserRewards())
    }, [dispatch])

    const rewardTitleReset = () => {
        setRewardName('')
    }

    const handleNewRewardEnter = () => {
        const newReward = {
            title: rewardName,
            notes: '',
            cost: 10,
            tags: ''
        }
        dispatch(createNewReward(newReward)).then(() => {
            rewardTitleReset()
            return <Redirect to='/my-dashboard' />
        })
    }

    return (
        <div id='rewards-column-wrapper'>
            <h2 className='column-h2'>Rewards</h2>
            <div id='rewards-column'>
                <form>
                    <input
                    name='new-reward'
                    id='new-habit-title-input'
                    value={rewardName}
                    onChange={(e) => setRewardName(e.target.value)}
                    placeholder='Add a Reward'
                    onKeyPress={(e) => {
                        if(e.key === 'Enter') {
                            handleNewRewardEnter()
                        } else {
                            setRewardName(e.target.value)
                        }
                    }}
                    />
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

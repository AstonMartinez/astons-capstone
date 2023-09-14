import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react'
import { getRank, getXPGoal, getMaxHealth } from "./LevelRankXp";
import AvatarDisplay from '../AvatarDisplay';
import './UserOverview.css'
import { getUserAvatar } from "../../store/avatars";

const UserOverview = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [level, setLevel] = useState(sessionUser.level)
    const [health, setHealth] = useState(sessionUser.health)
    const [currentXP, setCurrentXP] = useState(sessionUser.experience_points)

    const rankToSet = getRank(sessionUser)
    const xpGoalToSet = getXPGoal(sessionUser)
    const maxHealthToSet = getMaxHealth(sessionUser)

    const [rank, setRank] = useState(rankToSet)
    const [xpGoal, setXPGoal] = useState(xpGoalToSet)
    const [maxHealth, setMaxHealth] = useState(maxHealthToSet)

    // useEffect(() => {
    //     dispatch(getUserAvatar())
    // }, [dispatch])

    // return (
        return (
<div id='user-overview-wrapper'>
            <div>

                <div>
                    <div>
                        <div>
                            <p>{sessionUser.username}</p>
                        </div>
                        <div>
                            <p>@{sessionUser.username} • Level {level} {rank} </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img id="health-heart" src="https://i.ibb.co/sbhZwgt/love-always-wins.png" alt="love-always-wins" border="0" />
                        </div>
                        <div id='health-bar-outer'>
                            <div id='health-bar-inner' style={{"width": `${health}%`}}></div>
                        </div><span>{health}/{maxHealth}</span>
                    </div>
                    <div></div><span>{currentXP}/{xpGoal}</span>
                </div>
            </div>
            <div>
                <div>
                    <p>Play QuestForge with Others</p>
                    <p>Start your own Party or join an existing one<br></br>to take on Quests and boost your motivation!</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default UserOverview;

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react'
import { getRankHealth, getXPGoal, getMaxHealth } from "./LevelRankXp";
import AvatarDisplay from '../AvatarDisplay';
import './UserOverview.css'
import { getUserAvatar } from "../../store/avatars";

const UserOverview = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const rankLevelHealth = getRankHealth(sessionUser)
    const userLevel = rankLevelHealth[0]
    const userRank = rankLevelHealth[1]
    const userHealthGoal = rankLevelHealth[2]
    const userXPGoal = rankLevelHealth[3]
    const xpGoalToSet = getXPGoal(sessionUser)
    const maxHealthToSet = getMaxHealth(sessionUser)
    const [level, setLevel] = useState(userLevel)
    const [health, setHealth] = useState(userHealthGoal)
    const [currentXP, setCurrentXP] = useState(userXPGoal)

    const [rank, setRank] = useState(userRank)
    const [xpGoal, setXPGoal] = useState(xpGoalToSet)
    const [maxHealth, setMaxHealth] = useState(maxHealthToSet)

    // useEffect(() => {
    //     dispatch(getUserAvatar())
    // }, [dispatch])

    // return (
        return (
<div id='user-overview-wrapper'>
            <div id='user-overview-elem'>

                <div>
                    <div>
                        <div id='top-username-container'>
                            <p>{sessionUser.username}</p>
                        </div>
                        <div id='user-overview-username-container'>
                            <div>
                                <img id='warrior-sword' src="https://i.ibb.co/89kB12R/sword.png" alt="sword" border="0" />
                            </div>
                            <p>@{sessionUser.username} • Level {userLevel} {userRank} </p>
                        </div>
                    </div>
                    <div id='health-container'>
                        <div>
                            <img id="health-heart" src="https://i.ibb.co/sbhZwgt/love-always-wins.png" alt="love-always-wins" border="0" />
                        </div>
                        <progress id='health-bar-outer' value={sessionUser.health} max={userHealthGoal}>
                            <progress id='health-bar-inner' style={{"width": `${sessionUser.health / userHealthGoal}%`}}></progress>
                        </progress><span>{sessionUser.health}/{userHealthGoal}</span>
                    </div>
                    <div id='experience-container'>
                        <div>
                            <img id='experience-star' src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" />
                        </div>
                        <progress id='experience-bar-outer' value={sessionUser.experience_points} max={userXPGoal}>
                            <progress id='experience-bar-inner' style={{"width": `${sessionUser.experience_points / userXPGoal}%`}}></progress>
                        </progress>
                        <div></div><span>{sessionUser.experience_points}/{userXPGoal}</span>
                    </div>
                </div>
            </div>
            <div id='right-half-user-overview-elem'>
                <div>
                    <p>Play QuestForge with Others</p>
                    <p>Start your own Party or join an existing one<br></br>to take on Quests and boost your motivation!</p>
                    <button id='add-task-button' onClick={() =>  alert("Feature coming soon!")}>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default UserOverview;

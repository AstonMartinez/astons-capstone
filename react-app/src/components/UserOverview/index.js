import { useSelector } from "react-redux";
import { useState } from 'react'
import { getRank, getXPGoal, getMaxHealth } from "./LevelRankXp";
import './UserOverview.css'

const UserOverview = () => {
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

    return (
        <div id='user-overview-wrapper'>
            <div>
                <div>
                    <span>img placeholder</span>
                </div>
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
                        <div></div><span>{health}/{maxHealth}</span>
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

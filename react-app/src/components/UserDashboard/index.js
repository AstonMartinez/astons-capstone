import './UserDashboard.css'
import { getUserHabits } from '../../store/habits';
import { useState, useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const UserDashboard = () => {
    const dispatch = useDispatch()
    const allUserHabits = useSelector(state => state.habits.allHabits)

    // console.log(allUserHabits)
    const habitsToMap = Object.values(allUserHabits)

    useEffect(() => {
        dispatch(getUserHabits())
    }, [dispatch])

    return (
        <div>
            <div>
                <h2>Habits</h2>
                <button>Add a Habit</button>
                <div>
                    {habitsToMap && habitsToMap.map(habit => (
                        <div>
                            <h5>{habit.title}</h5>
                            <p>{habit.notes}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;

import UpdateHabit from "../UserDashboard/UpdateHabit"
import UpdateHabitModal from "../UserDashboard/UpdateHabitModal"
import { getUserHabits, createNewHabit, updateUserHabit } from '../../store/habits';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import IndividualHabit from "./IndividualHabit";

const HabitComponent = () => {
    const [habitTitle, setHabitTitle] = useState('')
    const dispatch = useDispatch()
    const allUserHabits = useSelector(state => state.habits.allHabits)
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [selectedHabit, setSelectedHabit] = useState(null)

    const habitsToMap = Object.values(allUserHabits)

    habitsToMap.reverse()

    useEffect(() => {
        dispatch(getUserHabits())
    }, [dispatch])

    const habitTitleReset = () => {
        setHabitTitle('')
    }

    const handleNewHabitEnter = () => {
        const newHabit = {
            title: habitTitle
        }
        dispatch(createNewHabit(newHabit)).then(() => {
            habitTitleReset()
            return <Redirect to='/my-dashboard' />
        })
    }


    return (
        <div id='habits-column-wrapper'>
            <h2 className='column-h2'>Habits</h2>
            <div id='habits-column'>
                <form>
                    <input
                    name='new-habit'
                    id='new-habit-title-input'
                    value={habitTitle}
                    onChange={(e) => setHabitTitle(e.target.value)}
                    placeholder='Add a Habit'
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleNewHabitEnter()
                        } else {
                            setHabitTitle(e.target.value)
                        }
                    }}
                    />
                </form>
                <div>
                    {habitsToMap && habitsToMap.map(habit => (
                        <div id='single-habit-container'>
                            <IndividualHabit habitData={habit} key={habit.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HabitComponent;

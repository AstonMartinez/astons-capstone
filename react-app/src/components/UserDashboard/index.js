import './UserDashboard.css'
import { getUserHabits, createNewHabit } from '../../store/habits';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import UpdateHabit from './UpdateHabit';
import UpdateHabitModal from './UpdateHabitModal';

const UserDashboard = () => {
    const dispatch = useDispatch()
    const allUserHabits = useSelector(state => state.habits.allHabits)
    const sessionUser = useSelector(state => state.session.user)
    const [habitTitle, setHabitTitle] = useState('')
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedHabit, setSelectedHabit] = useState(null)

    // console.log(allUserHabits)
    const habitsToMap = Object.values(allUserHabits)

    useEffect(() => {
        dispatch(getUserHabits())
    }, [dispatch])

    const habitTitleReset = () => {
        setHabitTitle('')
        setHasSubmitted(true)
    }

    const handleNewHabit = (e) => {
        e.preventDefault()
        const newHabit = {
            title: habitTitle
        }
        dispatch(createNewHabit(newHabit)).then(() => {
            habitTitleReset()
            return <Redirect to='/my-dashboard' />
        })
    }

    const handleUpdateDeleteClick = async (habit) => {
        setSelectedHabit(habit)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    return (
        <div>
            <div>
                <h2>Habits</h2>
                <form onSubmit={handleNewHabit}>
                    <input
                    name='new-habit'
                    id='new-habit-title-input'
                    value={habitTitle}
                    onChange={(e) => setHabitTitle(e.target.value)}
                    placeholder='Add a Habit'
                    />
                    <button type='submit'>+</button>
                </form>
                <div>
                    {habitsToMap && habitsToMap.map(habit => (
                        <>
                            <div onClick={() => {
                                // console.log(showModal)
                                return handleUpdateDeleteClick(habit)}}>
                                <h5>{habit.title}</h5>
                                <p>{habit.notes}</p>
                            </div>
                            <UpdateHabit habitId={habit.id} />
                        </>
                    ))}
                </div>
            </div>
            {showModal && (
                <UpdateHabitModal
                    habitId={selectedHabit.id}
                    habitData={selectedHabit}
                    onSubmit={() => {
                        setShowModal(false)
                        setSelectedHabit(null)
                    }}
                    onClose={() => {
                        setShowModal(false)
                        setSelectedHabit(null)
                    }}
                />
            )}
        </div>
    )
}

export default UserDashboard;

import './UserDashboard.css'
import { getUserHabits, createNewHabit } from '../../store/habits';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import UpdateHabit from './UpdateHabit';
import UpdateHabitModal from './UpdateHabitModal';
import DailiesComponent from '../Dailies';

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

    const handlePosClick = async(habit) => {
        // console.log("STARTING")
        let type
        if(habit.type === 'positive') {
            type = {type: ''}
            console.log("CURR TYPE FROM ADD POSITIVE: ", habit.type)

            const res = await fetch(`/api/habits/${habit.id}/change-habit-type`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(type)
            })

            if(res.ok) {
                await dispatch(getUserHabits()).then(() => {
                    console.log(habit.type)
                    console.log("ENDING")
                    return <Redirect to='/my-dashboard' />
                })
            }
        } else {
            type = {type: 'positive'}
            // console.log("CURR TYPE FROM REMOVE POSITIVE: ", habit.type)
            const res = await fetch(`/api/habits/${habit.id}/change-habit-type`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(type)
            })

            if(res.ok) {
                await dispatch(getUserHabits()).then(() => {
                    // console.log(habit.type)
                    // console.log("ENDING")
                    return <Redirect to='/my-dashboard' />
                })
            }
        }
    }

    const handleNegClick = async(habit) => {
        // console.log("STARTING")
        let type
        if(habit.type === 'negative') {
            type = {type: ''}
            // console.log("CURR TYPE FROM ADD POSITIVE: ", habit.type)

            const res = await fetch(`/api/habits/${habit.id}/change-habit-type`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(type)
            })

            if(res.ok) {
                await dispatch(getUserHabits()).then(() => {
                    console.log(habit.type)
                    console.log("ENDING")
                    return <Redirect to='/my-dashboard' />
                })
            }
        } else {
            type = {type: 'negative'}
            console.log("CURR TYPE FROM REMOVE POSITIVE: ", habit.type)
            const res = await fetch(`/api/habits/${habit.id}/change-habit-type`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(type)
            })

            if(res.ok) {
                await dispatch(getUserHabits()).then(() => {
                    // console.log(habit.type)
                    // console.log("ENDING")
                    return <Redirect to='/my-dashboard' />
                })
            }
        }
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

    const handleUpdateDeleteClick = async (habit) => {
        setSelectedHabit(habit)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    return (
        <div id='user-dashboard-wrapper'>
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
                                <div className='sidebar sidebar-left' id={`left-sidebar-${(habit.type === 'positive') ? 'filled' : 'empty'}`}><div id='habit-positive-div' className={`sidebar-positive-${(habit.type === 'positive') ? 'filled' : 'empty'}`} onClick={() => handlePosClick(habit)}><p>+</p></div></div>
                                <div id='single-habit-text-div' onClick={() => {
                                    // console.log(showModal)
                                    return handleUpdateDeleteClick(habit)}}>
                                    <p className='habit-title-text'>{habit.title}</p>
                                    <p className='habit-notes-text'>{habit.notes}</p>
                                </div>
                                <UpdateHabit habitId={habit.id} />
                                <div className='sidebar sidebar-right' id={`right-sidebar-${(habit.type === 'negative') ? 'filled' : 'empty'}`}><div id='habit-negative-div' className={`sidebar-negative-${(habit.type === 'negative') ? 'filled' : 'empty'}`} onClick={() => handleNegClick(habit)}><p>_</p></div></div>
                            </div>
                        ))}
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
            </div>
            <div>
                <DailiesComponent />
            </div>
        </div>
    )
}

export default UserDashboard;

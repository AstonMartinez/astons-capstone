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
    const [errors, setErrors] = useState([])

    const habitsToMap = Object.values(allUserHabits)

    habitsToMap.reverse()

    useEffect(() => {
        dispatch(getUserHabits())
    }, [dispatch])

    const habitTitleReset = () => {
        setHabitTitle('')
    }

    const validateTitle = (title) => {
        if(habitTitle.length > 255) {
            setErrors(["A Habit title must be 255 characters or less."])
            // console.log("ERRORS: *******************", errors)
            return false
        }
        return true
    }

    const handleDispatch = async(e) => {
        e.preventDefault()
        const newHabit = {
            title: habitTitle
        }
        dispatch(createNewHabit(newHabit)).then(() => {
            habitTitleReset()
            setErrors([])
            dispatch(getUserHabits())
            return <Redirect to='/my-dashboard' />
        })
    }

    const formNewHabit = async(e) => {
        e.preventDefault()
        const result = validateTitle(habitTitle)
        if(result === true) {
            handleDispatch(e)
            return
        } else {
            return
        }
    }

    const handleNewHabitEnter = (e) => {
        e.preventDefault()
        if(habitTitle.length > 255) {
            setErrors(["A habit title must be 255 characters or less."])
            return
        } else {
            const newHabit = {
                title: habitTitle
            }
            dispatch(createNewHabit(newHabit)).then(() => {
                habitTitleReset()
                // return <Redirect to='/my-dashboard' />
            })

        }
    }


    return (
        <div id='habits-column-wrapper'>
            <h2 className='column-h2'>Habits</h2>
            <div id='habits-column'>
                <form onSubmit={formNewHabit}>
                    <input
                    name='new-habit'
                    id='new-habit-title-input'
                    value={habitTitle}
                    onChange={(e) => setHabitTitle(e.target.value)}
                    placeholder='Add a Habit'
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            formNewHabit(e)
                        } else {
                            setHabitTitle(e.target.value)
                        }
                    }}
                    />
                    {errors.length ? (<p id='create-task-error-text'>{errors[0]}</p>): ''}
                </form>
                <div>
                    {habitsToMap && habitsToMap.map(habit => (
                        // <div id='single-habit-container'>
                            <IndividualHabit habitData={habit} key={habit.id} />
                        // </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HabitComponent;

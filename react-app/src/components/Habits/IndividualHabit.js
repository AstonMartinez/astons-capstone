import UpdateHabit from "../UserDashboard/UpdateHabit"
import UpdateHabitModal from "../UserDashboard/UpdateHabitModal"
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { updateUserHabit, getOneHabit, getUserHabits } from "../../store/habits"
import { updateUserInfo } from "../../store/session"
import './Habits.css'
import { updateUserDaily } from "../../store/dailies"

const IndividualHabit = ({habitData}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const allHabits = useSelector(state => state.habits.allHabits)
    const currentHabit = allHabits[habitData.id]
    // console.log(currentHabit)
    const [showModal, setShowModal] = useState(false)
    const [selectedHabit, setSelectedHabit] = useState(null)
    const [positiveCount, setPositiveCount] = useState(habitData.pos_count)
    const [negativeCount, setNegativeCount] = useState(habitData.neg_count)
    const [status, setStatus] = useState(habitData.status)

    let countDisplay

    const healthBar = document.getElementById('health-bar-inner')
    let xpBar = document.getElementById('experience-bar-inner')


    const initialPosFill = () => {
        if(currentHabit.type === "negative") {
            return "gray"
        }

        if (currentHabit.type === "positive") {
            if(currentHabit.pos_count >= 1) {
                // setPositiveFill("green")
                return "green"
            } else {
                // setPositiveFill("orange")
                return "orange"
            }
        }

        if(currentHabit.type === "positive, negative") {
            if(currentHabit.pos_count > currentHabit.neg_count) {
                // setPositiveFill("green")
                return "green"
            } else if(currentHabit.pos_count === currentHabit.neg_count) {
                // setPositiveFill("orange")
                return "orange"
            } else {
                // setPositiveFill("dark-orange")
                return "dark-orange"
            }
        }
    }

    const initialNegFill = () => {
        if(currentHabit.type === "positive") {
            return "gray"
        }

        if (currentHabit.type === "negative") {
            return "dark-orange"
        }

        if(currentHabit.type === "positive, negative") {
            if(currentHabit.pos_count > currentHabit.neg_count) {
                // setPositiveFill("green")
                return "orange"
            } else if(currentHabit.pos_count === currentHabit.neg_count) {
                // setPositiveFill("orange")
                return "orange"
            } else {
                // setPositiveFill("dark-orange")
                return "dark-orange"
            }
        }
    }


    const starterPosFill = initialPosFill()
    const starterNegFill = initialNegFill()

    const [positiveFill, setPositiveFill] = useState(starterPosFill)
    const [negativeFill, setNegativeFill] = useState(starterNegFill)


    useEffect(() => {
        dispatch(getUserHabits)
        const starterPosFill = initialPosFill()
        setPositiveFill(starterPosFill)
        const starterNegFill = initialNegFill()
        setNegativeFill(starterNegFill)

    }, [dispatch])

    const handlePosClick = async() => {
        if(habitData.type === "negative") {
            return
        }

        xpBar += 5

        // const currCount = habitData.pos_count
        const incremented = positiveCount + 1
        setPositiveCount(incremented)
        // let status
        if(habitData.type === "positive, negative") {
            if(incremented > habitData.neg_count) {
                setStatus("strong")
                setPositiveFill("green")
                setNegativeFill("green")
            } else if(habitData.pos_count === habitData.neg_count || (habitData.pos_count === 0 && habitData.neg_count === 0)) {
                setStatus("regular")
                setPositiveFill("orange")
                setNegativeFill("orange")
            } else {
                setStatus("weak")
                setPositiveFill("dark-orange")
                setNegativeFill("dark-orange")
            }
        } else {
            if(incremented >= 1) {
                setStatus("strong")
                setPositiveFill("green")
                setNegativeFill("gray")
            } else if(habitData.pos_count === 0) {
                setStatus("regular")
                setPositiveFill("orange")
                setNegativeFill("gray")
            } else {
                setStatus("weak")
                setPositiveFill("dark-orange")
                setNegativeFill("gray")
            }
        }

        const currentGold = sessionUser.gold
        const currentXP = sessionUser.experience_points
        const currentLevel = sessionUser.level
        const currentHealth = sessionUser.health
        const incrementedGold = currentGold + 1
        const incrementedXP = currentXP + 5

        const result = {
            gold: incrementedGold,
            experience_points: incrementedXP,
            level: currentLevel,
            health: currentHealth
        }

        if(incrementedXP >= 100) {
            result.level = 2
        } else if(incrementedXP >= 200) {
            result.level = 3
        }

        const updatedhabitInfo = {
            title: habitData.title,
            notes: habitData.notes,
            type: habitData.type,
            difficulty: habitData.difficulty,
            tags: habitData.tags,
            pos_count: incremented,
            neg_count: habitData.neg_count,
            status: status
        }
        await dispatch(updateUserHabit(habitData.id, updatedhabitInfo))
        await dispatch(updateUserInfo(result)).then(() => {
            return <Redirect to='/my-dashboard' />
        })


    }

    const handleNegClick = async() => {
        if(habitData.type === "positive") {
            return
        }

        // let count
        const currCount = negativeCount
        setNegativeCount(currCount + 1)
        const incremented = negativeCount
        if(habitData.type === "negative" && currCount === 0) {

            const userInfo = {
                gold: sessionUser.gold,
                experience_points: sessionUser.experience_points,
                level: sessionUser.level,
                health: sessionUser.health - 2
            }

            await dispatch(updateUserInfo(userInfo))
            return
        } else {
            if(habitData.type === "positive, negative") {
                if(habitData.pos_count > habitData.neg_count) {
                    setStatus("strong")
                    // count = currCount + 1
                    setNegativeFill("green")
                    setPositiveFill("green")
                } else if(habitData.pos_count === habitData.neg_count) {
                    setStatus("regular")
                    // count = currCount + 1
                    setNegativeFill("orange")
                    setNegativeFill("orange")
                } else {
                    setStatus("weak")
                    // count = currCount + 1
                    setNegativeFill("dark-orange")
                    setNegativeFill("dark-orange")
                }
            } else {
                if(habitData.neg_count >= 1) {
                    setStatus("weak")
                    // count = currCount + 1
                    setNegativeFill("dark-orange")
                    setPositiveFill("gray")
                }
            }
            // setNegativeCount(incremented)
            const currentGold = sessionUser.gold
            const currentXP = sessionUser.experience_points
            const currentLevel = sessionUser.level
            const currentHealth = sessionUser.health
            const decrementedHealth = currentHealth - 2

            const result = {
                gold: currentGold,
                experience_points: currentXP,
                level: currentLevel,
                health: decrementedHealth
            }

            const updatedhabitInfo = {
                title: habitData.title,
                notes: habitData.notes,
                type: habitData.type,
                difficulty: habitData.difficulty,
                tags: habitData.tags,
                pos_count: positiveCount,
                neg_count: incremented,
                status: status
            }

            await dispatch(updateUserHabit(habitData.id, updatedhabitInfo))
            await dispatch(updateUserInfo(result))
            await dispatch(getOneHabit(habitData.id)).then(() => {
                return <Redirect to='/my-dashboard' />
            })

        }


    }


    const handleUpdateDeleteClick = async (habitData) => {
        setSelectedHabit(habitData)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    if(habitData.type === "positive") {
        countDisplay = (
            <div>
                <span>{positiveCount}</span>
            </div>
        )
    } else if(habitData.type === "positive, negative") {
        countDisplay = (
            <div>
                <span>{positiveCount > 0 ? '+' : '0'}{positiveCount} | {negativeCount > 0 ? '-' : '0'}{negativeCount}</span>
            </div>
        )
    } else {
        countDisplay = (
            <div>
                <span>{negativeCount}</span>
            </div>
        )
    }

    const getTopFill = () => {
        if(habitData.status === "weak") {
            return "dark-orange"
        } else if(habitData.status === "strong") {
            return "green"
        } else {
            return "orange"
        }
    }

    return (
        <>
            <div id='single-habit-container'>
                <div className='sidebar left-habit-sidebar' id={`left-sidebar-${initialPosFill()}`}>
                    <div id='habit-positive-div' className={`sidebar-positive-${initialPosFill()}`} onClick={() => handlePosClick()}>
                        <p>+</p>
                    </div>
                </div>
                <div id='single-habit-text-div' onClick={() => {
                    return handleUpdateDeleteClick(habitData)}}>
                    <p className='habit-title-text'>{habitData.title}</p>
                    <p className='habit-notes-text'>{habitData.notes}</p>
                    {countDisplay}
                </div>
                <div className='sidebar right-habit-sidebar' id={`right-sidebar-${initialNegFill()}`}>
                    <div id='habit-negative-div' className={`sidebar-negative-${initialNegFill()}`} onClick={() => handleNegClick()}>
                        <p>_</p>
                    </div>
                </div>
                <UpdateHabit habitId={habitData.id} />
            </div>
            {showModal && (
                    <UpdateHabitModal
                        habitId={selectedHabit.id}
                        habitData={selectedHabit}
                        fillType={getTopFill}
                        onSubmit={() => {
                            setShowModal(false)
                            setSelectedHabit(null)
                            dispatch(getUserHabits())
                            if(currentHabit.type === 'positive') {

                            }
                        }}
                        onClose={() => {
                            setShowModal(false)
                            setSelectedHabit(null)
                            dispatch(getUserHabits())
                        }}
                    />
                )}
        </>
    )
}

export default IndividualHabit;

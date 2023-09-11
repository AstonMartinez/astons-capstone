import UpdateHabit from "../UserDashboard/UpdateHabit"
import UpdateHabitModal from "../UserDashboard/UpdateHabitModal"
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { updateUserHabit, getOneHabit } from "../../store/habits"
import { updateUserInfo } from "../../store/session"
import './Habits.css'
import { updateUserDaily } from "../../store/dailies"

const IndividualHabit = ({habitData}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [selectedHabit, setSelectedHabit] = useState(null)
    const [positiveCount, setPositiveCount] = useState(habitData.pos_count)
    const [negativeCount, setNegativeCount] = useState(habitData.neg_count)
    const [status, setStatus] = useState(habitData.status)

    let countDisplay

    // useEffect(() => {
    //     dispatch(getOneHabit(habitData.id))
    // }, [dispatch])


    const initialPosFill = () => {
        if(habitData.type === "negative") {
            return "gray"
        }

        if (habitData.type === "positive") {
            if(habitData.pos_count >= 1) {
                // setPositiveFill("green")
                return "green"
            } else {
                // setPositiveFill("orange")
                return "orange"
            }
        }

        if(habitData.type === "positive, negative") {
            if(habitData.pos_count > habitData.neg_count) {
                // setPositiveFill("green")
                return "green"
            } else if(habitData.pos_count === habitData.neg_count) {
                // setPositiveFill("orange")
                return "orange"
            } else {
                // setPositiveFill("dark-orange")
                return "dark-orange"
            }
        }
    }

    const initialNegFill = () => {
        if(habitData.type === "positive") {
            return "gray"
        }

        if (habitData.type === "negative") {
            return "dark-orange"
        }

        if(habitData.type === "positive, negative") {
            if(habitData.pos_count > habitData.neg_count) {
                // setPositiveFill("green")
                return "orange"
            } else if(habitData.pos_count === habitData.neg_count) {
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

    const handlePosClick = async() => {
        if(habitData.type === "negative") {
            // console.log("THIS HABIT IS ONLY NEGATIVE")
            return
        }

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
        console.log(updatedhabitInfo)
        await dispatch(updateUserHabit(habitData.id, updatedhabitInfo))
        await dispatch(updateUserInfo(result)).then(() => {
            return <Redirect to='/my-dashboard' />
        })


    }

    const handleNegClick = async() => {
        if(habitData.type === "positive") {
            // console.log("THIS HABIT IS ONLY POSITIVE")
            return
        }

        let count
        const currCount = habitData.neg_count
        // console.log("CURR COUNT: ", currCount)
        if(habitData.type === "negative" && currCount === 0) {
            // console.log("STARTING")
            const userInfo = {
                gold: sessionUser.gold,
                experience_points: sessionUser.experience_points,
                level: sessionUser.level,
                health: sessionUser.health - 2
            }

            await dispatch(updateUserInfo(userInfo))
            return
            // console.log("WORKED")
            // return <Redirect to='/my-dashboard' />
        } else {
            const incremented = currCount + 1
            // let status
            if(habitData.type === "positive, negative") {
                if(habitData.pos_count > habitData.neg_count) {
                    setStatus("strong")
                    count = currCount + 1
                    setNegativeFill("green")
                    setPositiveFill("green")
                } else if(habitData.pos_count === habitData.neg_count) {
                    setStatus("regular")
                    count = currCount + 1
                    setNegativeFill("orange")
                    setNegativeFill("orange")
                } else {
                    setStatus("weak")
                    count = currCount + 1
                    setNegativeFill("dark-orange")
                    setNegativeFill("dark-orange")
                }
            } else {
                if(habitData.neg_count >= 1) {
                    setStatus("weak")
                    count = currCount
                    setNegativeFill("dark-orange")
                    setPositiveFill("gray")
                }
            }

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
                pos_count: habitData.pos_count,
                neg_count: count,
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
                <span>{positiveCount > 0 ? '+' : ''}{positiveCount} | {negativeCount > 0 ? '-' : ''}{negativeCount}</span>
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
                <div className='sidebar left-habit-sidebar' id={`left-sidebar-${positiveFill}`}>
                    <div id='habit-positive-div' className={`sidebar-positive-${positiveFill}`} onClick={() => handlePosClick()}>
                        <p>+</p>
                    </div>
                </div>
                <div id='single-habit-text-div' onClick={() => {
                    // console.log(showModal)
                    return handleUpdateDeleteClick(habitData)}}>
                    <p className='habit-title-text'>{habitData.title}</p>
                    <p className='habit-notes-text'>{habitData.notes}</p>
                    {countDisplay}
                </div>
                <div className='sidebar right-habit-sidebar' id={`right-sidebar-${negativeFill}`}>
                    <div id='habit-negative-div' className={`sidebar-negative-${negativeFill}`} onClick={() => handleNegClick()}>
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
                        }}
                        onClose={() => {
                            setShowModal(false)
                            setSelectedHabit(null)
                        }}
                    />
                )}
        </>
    )
}

export default IndividualHabit;

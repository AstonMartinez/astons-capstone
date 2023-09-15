import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { createNewDaily, getUserDailies } from '../../store/dailies'
import IndividualDaily from './IndividualDaily'

const DailiesComponent = () => {
    const dispatch = useDispatch()
    const allUserDailies = useSelector(state => state.dailies.allDailies)
    const sessionUser = useSelector(state => state.session.user)
    const [dailyTitle, setDailyTitle] = useState('')
    const [errors, setErrors] = useState([])

    const dailiesToMap = Object.values(allUserDailies)
    dailiesToMap.reverse()

    useEffect(() => {
        dispatch(getUserDailies())
    }, [dispatch])

    const dailyTitleReset = () => {
        setDailyTitle('')
    }

    const validateTitle = (title) => {
        if(dailyTitle.length > 255) {
            setErrors(["A Daily title must be 255 characters or less."])
            // console.log("ERRORS: *******************", errors)
            return false
        }
        return true
    }

    const handleDispatch = async(e) => {
        e.preventDefault()
        const newDaily = {
            title: dailyTitle
        }
        dispatch(createNewDaily(newDaily)).then(() => {
            dailyTitleReset()
            setErrors([])
            dispatch(getUserDailies())
            return <Redirect to='/my-dashboard' />
        })
    }

    const formNewDaily = async(e) => {
        e.preventDefault()
        const result = validateTitle(dailyTitle)
        if(result === true) {
            handleDispatch(e)
            return
        } else {
            return
        }
    }

    // Handles adding a new daily when the user presses Enter
    const handleNewDailyEnter = (e) => {
        e.preventDefault()
        if(dailyTitle.length > 255) {
            setErrors(["A daily title must be 255 characters or less."])
            return
        } else {
        const newDaily = {
            title: dailyTitle
        }
        dispatch(createNewDaily(newDaily)).then(async () => {
            dailyTitleReset()
            await dispatch(getUserDailies())
            return
        })
    }
    }

    return (
        <div id='dailies-column-wrapper'>
            <h2 className='column-h2'>Dailies</h2>
            <div id='dailies-column'>
                <form onSubmit={formNewDaily}>
                    <input
                    name='new-daily'
                    id='new-daily-title-input'
                    value={dailyTitle}
                    onChange={(e) => setDailyTitle(e.target.value)}
                    placeholder='Add a Daily'
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            formNewDaily(e)
                        } else {
                            setDailyTitle(e.target.value)
                        }
                    }}
                    />
                     {errors.length ? (<div id='reward-enter-form-error'><p id='create-task-error-text'>{errors[0]}</p></div>): ''}
                </form>
                <div>
                    {dailiesToMap && dailiesToMap.map(daily => (
                        <div>
                            <IndividualDaily dailyData={daily} key={daily.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DailiesComponent;

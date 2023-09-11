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

    const dailiesToMap = Object.values(allUserDailies)
    dailiesToMap.reverse()

    useEffect(() => {
        dispatch(getUserDailies())
    }, [dispatch])

    const dailyTitleReset = () => {
        setDailyTitle('')
    }

    // Handles adding a new daily when the user presses Enter
    const handleNewDailyEnter = () => {
        const newDaily = {
            title: dailyTitle
        }
        dispatch(createNewDaily(newDaily)).then(async () => {
            dailyTitleReset()
            await dispatch(getUserDailies())
            return
        })
    }

    return (
        <div id='dailies-column-wrapper'>
            <h2 className='column-h2'>Dailies</h2>
            <div id='dailies-column'>
                <form>
                    <input
                    name='new-daily'
                    id='new-daily-title-input'
                    value={dailyTitle}
                    onChange={(e) => setDailyTitle(e.target.value)}
                    placeholder='Add a Daily'
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleNewDailyEnter()
                        } else {
                            setDailyTitle(e.target.value)
                        }
                    }}
                    />
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

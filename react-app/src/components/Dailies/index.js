import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { createNewDaily, getUserDailies } from '../../store/dailies'
import UpdateDeleteDaily from './UpdateDeleteDaily'
import UpdateDeleteDailyModal from './UpdateDeleteDailyModal'

const DailiesComponent = () => {
    const dispatch = useDispatch()
    const allUserDailies = useSelector(state => state.dailies.allDailies)
    const sessionUser = useSelector(state => state.session.user)
    const [dailyTitle, setDailyTitle] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedDaily, setSelectedDaily] = useState(null)

    const dailiesToMap = Object.values(allUserDailies)

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
        dispatch(createNewDaily(newDaily)).then(() => {
            dailyTitleReset()
            return <Redirect to='/my-dashboard' />
        })
    }

    // Handles opening the modal for deleting/updating
    const handleUpdateDeleteClick = async (daily) => {
        setSelectedDaily(daily)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    return (
        <div>
        <div>
            <h2>Dailies</h2>
            <form>
                <input
                name='new-daily'
                id='new-daily-title-input'
                value={dailyTitle}
                onChange={(e) => setDailyTitle(e.target.value)}
                placeholder='Add a Habit'
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
                    <>
                        <div onClick={() => {
                            // console.log(showModal)
                            return handleUpdateDeleteClick(daily)}}>
                            <h5>{daily.title}</h5>
                            <p>{daily.notes}</p>
                        </div>
                        <UpdateDeleteDaily habitId={daily.id} />
                    </>
                ))}
            </div>
            {showModal && (
                <UpdateDeleteDailyModal
                    dailyId={selectedDaily.id}
                    dailyData={selectedDaily}
                    onSubmit={() => {
                        setShowModal(false)
                        setSelectedDaily(null)
                    }}
                    onClose={() => {
                        setShowModal(false)
                        setSelectedDaily(null)
                    }}
                />
            )}
        </div>
    </div>
    )
}

export default DailiesComponent;

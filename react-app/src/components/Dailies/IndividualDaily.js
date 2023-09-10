import UpdateDeleteDaily from "./UpdateDeleteDaily";
import UpdateDeleteDailyModal from "./UpdateDeleteDailyModal";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { updateUserDaily, getOneDaily } from "../../store/dailies";
import { updateUserInfo } from "../../store/session";
import './Dailies.css'

const IndividualDaily = ({dailyData}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [selectedDaily, setSelectedDaily] = useState(null)
    const [count, setCount] = useState(dailyData.count)

    useEffect(() => {
        dispatch(getOneDaily(dailyData.id))
    }, [dispatch])

    // Handles opening the modal for deleting/updating
    const handleUpdateDeleteClick = async () => {
        setSelectedDaily(dailyData)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    return (
        <>
            <div id='single-daily-container'>
                <div className='daily-left-sidebar'>
                    <div id='daily-sidebar-checkbox'>
                    </div>
                </div>
                <div id='single-daily-text-div' onClick={() => handleUpdateDeleteClick()}>
                    <p id='daily-title-text'>{dailyData.title}</p>
                    <p id='daily-notes-text'>{dailyData.notes}</p>
                    <div>
                        <span id='daily-count-span'>{dailyData.count}</span>
                    </div>
                </div>
                <UpdateDeleteDaily dailyId={dailyData.id} />
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
        </>
    )

}

export default IndividualDaily;

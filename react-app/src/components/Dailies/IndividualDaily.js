import UpdateDeleteDaily from "./UpdateDeleteDaily";
import UpdateDeleteDailyModal from "./UpdateDeleteDailyModal";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { updateUserDaily, getOneDaily, updateCount } from "../../store/dailies";
import { updateUserInfo } from "../../store/session";
import './Dailies.css'

const IndividualDaily = ({dailyData}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [selectedDaily, setSelectedDaily] = useState(null)
    const [count, setCount] = useState(dailyData.count)
    const [isChecked, setIsChecked] = useState(false)
    const [sidebarFill, setSidebarFill] = useState("orange")
    const [gold, setGold] = useState(sessionUser.gold)
    const [exp, setExp] = useState(sessionUser.experience_points)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        dispatch(getOneDaily(dailyData.id))
    }, [dispatch])

    // Handles opening the modal for deleting/updating
    const handleUpdateDeleteClick = async () => {
        setSelectedDaily(dailyData)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    const checkBox = async () => {
        setIsChecked(true)
        setSidebarFill("gray")
        setCount(count+1)
        setGold(gold+1)
        setFinished(true)
        console.log(finished)

        const updatedCount = {
            count: count
        }

        const updatedData = {
            gold: gold,
            health: sessionUser.health,
            experience_points: exp,
            level: sessionUser.level
        }

        await(dispatch(updateCount(dailyData.id, updatedCount)))
        await dispatch(updateUserInfo(updatedData)).then(() => {
            return <Redirect to='/my-dashboard' />
        })
    }

    return (
        <>
            <div id='single-daily-container'>
                <div className={`daily-left-sidebar-${sidebarFill}`}>
                    <div disabled={finished ? true : false} id={`daily-sidebar-checkbox-${sidebarFill}`} onMouseEnter={() => {
                        // if(isChecked) {
                        //     return
                        // }
                        setIsChecked(true)
                        return
                        }} onMouseLeave={() => {
                            setIsChecked(false)
                            return
                        }} onClick={checkBox}>
                    <i id={`checkbox-icon-${isChecked}`} className="fa-solid fa-check" style={{"color": "#7c7e7f"}}></i>
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

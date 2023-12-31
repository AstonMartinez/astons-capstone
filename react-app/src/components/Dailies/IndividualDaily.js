import UpdateDeleteDaily from "./UpdateDeleteDaily";
import UpdateDeleteDailyModal from "./UpdateDeleteDailyModal";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { updateUserDaily, getOneDaily, updateDailyStatus } from "../../store/dailies";
import { updateUserInfo } from "../../store/session";
import './Dailies.css'
// import { stringToInt, stringToInt2 } from './DateFunctions'

const IndividualDaily = ({dailyData}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [selectedDaily, setSelectedDaily] = useState(null)
    const [count, setCount] = useState(dailyData.count)
    const checkedOrNo = dailyData.status === "not due" ? true : false
    const [isChecked, setIsChecked] = useState(checkedOrNo)
    const greyOrOrange = dailyData.status === "not due" ? "gray" : "orange"
    const [sidebarFill, setSidebarFill] = useState(greyOrOrange)
    const [gold, setGold] = useState(sessionUser.gold)
    const [exp, setExp] = useState(sessionUser.experience_points)
    const [finished, setFinished] = useState(false)
    const [status, setStatus] = useState(dailyData.status)

    const handleUpdateDeleteClick = async () => {
        setSelectedDaily(dailyData)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    const checkBox = async () => {
        if(status === 'due') {
            setIsChecked(true)
            setSidebarFill("gray")
            setCount(count+1)
            setGold(gold+1)
            setFinished(true)
            setStatus("not due")
            setExp(exp+5)

            const updatedDaily = {
                status: "not due"
            }

            const updatedData = {
                gold: gold+1,
                health: sessionUser.health,
                experience_points: exp+5,
                level: sessionUser.level
            }

            await(dispatch(updateDailyStatus(dailyData.id, updatedDaily)))
            await dispatch(updateUserInfo(updatedData)).then(() => {
                return <Redirect to='/my-dashboard' />
            })

        } else {
            setIsChecked(false)
            setSidebarFill("orange")
            setCount(count-1)
            setGold(gold-1)
            setFinished(false)
            setStatus("due")
            setExp(exp-5)

            const updatedDaily = {
                status: "due"
            }

            const updatedData = {
                gold: gold-1,
                health: sessionUser.health,
                experience_points: exp-5,
                level: sessionUser.level
            }

            await(dispatch(updateDailyStatus(dailyData.id, updatedDaily)))
            await dispatch(updateUserInfo(updatedData)).then(() => {
                return <Redirect to='/my-dashboard' />
            })
        }

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
                            if(status === "due") {
                                setIsChecked(false)
                            }
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

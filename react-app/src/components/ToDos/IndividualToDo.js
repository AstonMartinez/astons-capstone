import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './ToDos.css'
import { getOneToDo, updateUserToDo } from '../../store/todos'
import { updateUserInfo } from '../../store/session'
import UpdateToDoFunc from './UpdateToDo'
import ToDoUpdateDeleteModal from './UpdateToDoModal'

const IndividualToDo = ({toDoData}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [selectedToDo, setSelectedToDo] = useState(null)
    const [isChecked, setIsChecked] = useState(false)
    const [sidebarFill, setSidebarFill] = useState("orange")
    const [gold, setGold] = useState(sessionUser.gold)
    const [exp, setExp] = useState(sessionUser.experience_points)
    const [finished, setFinished] = useState(true)

    useEffect(() => {
        dispatch(getOneToDo(toDoData.id))
    }, [dispatch])

    const handleUpdateDeleteClick = async () => {
        selectedToDo(toDoData)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    const checkBox = async () => {
        setIsChecked(true)
        setSidebarFill("gray")
        setGold(gold+1)
        setFinished(true)

        const updatedData = {
            gold: gold,
            health: sessionUser.health,
            experience_points: exp,
            level: sessionUser.level
        }

        await dispatch(getOneToDo(toDoData.id))
        await dispatch(updateUserInfo(updatedData)).then(() => {
            return <Redirect to='/my-dashboard' />
        })
    }
    return (
        <>
        <div id='single-todo-container'>
            <div className={`todo-left-sidebar-${sidebarFill}`}>
                <div disabled={finished ? true : false} id={`daily-todo-checkbox-${sidebarFill}`} onMouseEnter={() => {
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
                <p id='daily-title-text'>{toDoData.title}</p>
                <p id='daily-notes-text'>{toDoData.notes}</p>
                <div>
                    <span id='daily-count-span'>{toDoData.count}</span>
                </div>
            </div>
            {/* <UpdateToDoFunc dailyId={toDoData.id} /> */}
        </div>
        {/* {showModal && (
            <ToDoUpdateDeleteModal
                dailyId={selectedToDo.id}
                dailyData={selectedToDo}
                onSubmit={() => {
                    setShowModal(false)
                    setSelectedToDo(null)
                }}
                onClose={() => {
                    setShowModal(false)
                    setSelectedToDo(null)
                }}
            />
        )} */}
    </>
    )
}

export default IndividualToDo;

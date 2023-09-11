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
    const [status, setStatus] = useState(toDoData.status)

    // useEffect(() => {
    //     dispatch(getOneToDo(toDoData.id))
    // }, [dispatch])

    const handleUpdateDeleteClick = async () => {
        setSelectedToDo(toDoData)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    const checkBox = async () => {

        if(status === "incomplete") {
            setIsChecked(true)
            setSidebarFill("gray")
            setStatus("complete")
            setGold(gold+1)
            setFinished(true)
            setExp(exp+5)

            const updatedToDo = {
                title: toDoData.title,
                notes: toDoData.notes,
                checklist: toDoData.checklist,
                due_date: toDoData.due_date,
                tags: toDoData.tags,
                status: status
            }

            const updatedData = {
                gold: gold,
                health: sessionUser.health,
                experience_points: exp,
                level: sessionUser.level
            }

            await dispatch(updateUserToDo(toDoData.id, updatedToDo))
            await dispatch(updateUserInfo(updatedData)).then(() => {
                return <Redirect to='/my-dashboard' />
            })
        } else {
            setIsChecked(false)
            setSidebarFill("orange")
            setStatus("incomplete")
            setGold(gold-1)
            setFinished(false)
            setExp(exp-5)

            const updatedToDo = {
                title: toDoData.title,
                notes: toDoData.notes,
                checklist: toDoData.checklist,
                due_date: toDoData.due_date,
                tags: toDoData.tags,
                status: status
            }

            const updatedData = {
                gold: gold,
                health: sessionUser.health,
                experience_points: exp,
                level: sessionUser.level
            }

            await dispatch(updateUserToDo(toDoData.id, updatedToDo))
            await dispatch(updateUserInfo(updatedData)).then(() => {
                return <Redirect to='/my-dashboard' />
            })
        }
    }
    return (
        <>
        <div id='single-todo-container'>
            <div className={`todo-left-sidebar-${sidebarFill}`}>
                <div id={`todo-checkbox-${sidebarFill}`} onMouseEnter={() => {
                    // if(isChecked) {
                    //     return
                    // }
                    setIsChecked(true)
                    return
                    }} onMouseLeave={() => {
                        if(status === "incomplete") {
                            setIsChecked(false)
                        }
                        return
                    }} onClick={checkBox}>
                <i id={`checkbox-icon-${isChecked}`} className="fa-solid fa-check" style={{"color": "#7c7e7f"}}></i>
                </div>
            </div>
            <div id='single-daily-text-div' onClick={() => handleUpdateDeleteClick()}>
                <p id='daily-title-text'>{toDoData.title}</p>
                <p id='daily-notes-text'>{toDoData.notes}</p>
                {/* <div>
                    <span id='daily-count-span'>{toDoData.count}</span>
                </div> */}
            </div>
            <UpdateToDoFunc toDoId={toDoData.id} />
        </div>
        {showModal && (
            <ToDoUpdateDeleteModal
                toDoId={selectedToDo.id}
                toDoData={selectedToDo}
                onSubmit={() => {
                    setShowModal(false)
                    setSelectedToDo(null)
                }}
                onClose={() => {
                    setShowModal(false)
                    setSelectedToDo(null)
                }}
            />
        )}
    </>
    )
}

export default IndividualToDo;

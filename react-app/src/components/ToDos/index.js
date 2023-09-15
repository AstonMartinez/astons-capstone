import './ToDos.css'
import IndividualToDo from './IndividualToDo';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { createNewToDo, getUserToDos } from '../../store/todos';

const ToDosComponent = () => {
    const dispatch = useDispatch()
    const allUserToDos = useSelector(state => state.toDos.allToDos)
    const sessionUser = useSelector(state => state.session.user)
    const [toDoTitle, setToDoTitle] = useState('')
    const [errors, setErrors] = useState([])

    const toDosToMap = Object.values(allUserToDos)

    toDosToMap.reverse()

    useEffect(() => {
        dispatch(getUserToDos())
    }, [dispatch])

    const toDoTitleReset = () => {
        setToDoTitle('')
    }

    const validateTitle = (title) => {
        if(toDoTitle.length > 255) {
            setErrors(["A To-Do title must be 255 characters or less."])
            // console.log("ERRORS: *******************", errors)
            return false
        }
        return true
    }

    const handleDispatch = async(e) => {
        e.preventDefault()
        const newToDo = {
            title: toDoTitle
        }
        dispatch(createNewToDo(newToDo)).then(() => {
            toDoTitleReset()
            setErrors([])
            dispatch(getUserToDos())
            return <Redirect to='/my-dashboard' />
        })
    }

    const formNewToDo = async(e) => {
        e.preventDefault()
        const result = validateTitle(toDoTitle)
        if(result === true) {
            handleDispatch(e)
            return
        } else {
            return
        }
    }

    // Handles adding a new todo when the user presses Enter
    const handleNewToDo = (e) => {
        e.preventDefault()
        if(toDoTitle.length > 255) {
            setErrors(["A to-do title must be 255 characters or less."])
            return
        } else {
        const newToDo = {
            title: toDoTitle
        }
        dispatch(createNewToDo(newToDo)).then(() => {
            toDoTitleReset()
            dispatch(getUserToDos())
            return
        })
    }
    }
    return (
        <div id='todos-column-wrapper'>
        <h2 className='column-h2'>To-Do's</h2>
        <div id='todos-column'>
            <form onSubmit={formNewToDo}>
                <input
                name='new-todo'
                id='new-todo-title-input'
                value={toDoTitle}
                onChange={(e) => setToDoTitle(e.target.value)}
                placeholder='Add a To-Do'
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        formNewToDo(e)
                    } else {
                        setToDoTitle(e.target.value)
                    }
                }}
                />
                 {errors.length ? (<div id='reward-enter-form-error'><p id='create-task-error-text'>{errors[0]}</p></div>): ''}
            </form>
            <div>
                {toDosToMap && toDosToMap.map(todo => (
                    <div>
                        <IndividualToDo toDoData={todo} key={todo.id} />
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default ToDosComponent;

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

    const toDosToMap = Object.values(allUserToDos)

    useEffect(() => {
        dispatch(getUserToDos())
    }, [dispatch])

    const toDoTitleReset = () => {
        setToDoTitle('')
    }

    // Handles adding a new todo when the user presses Enter
    const handleNewToDo = () => {
        const newToDo = {
            title: toDoTitle
        }
        dispatch(createNewToDo(newToDo)).then(() => {
            toDoTitleReset()
            return <Redirect to='/my-dashboard' />
        })
    }
    return (
        <div id='todos-column-wrapper'>
        <h2 className='column-h2'>To-Do's</h2>
        <div id='todos-column'>
            <form>
                <input
                name='new-todo'
                id='new-todo-title-input'
                value={toDoTitle}
                onChange={(e) => setToDoTitle(e.target.value)}
                placeholder='Add a To-Do'
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleNewToDo()
                    } else {
                        setToDoTitle(e.target.value)
                    }
                }}
                />
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

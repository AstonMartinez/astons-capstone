const GET_USER_TODOS = '/todos/getToDos'
const CREATE_TODO = '/todos/createNew'
const UPDATE_TODO = '/todos/updateToDo'
const DELETE_TODO = '/todos/deleteToDo'
const GET_SINGLE_TODO = '/todos/getOne'
const GET_FILTERED_TODOS = '/todos/filter'
const GET_SEARCHED_TODOS = '/todos/search'

const search = (data) => {
    return {
        type: GET_SEARCHED_TODOS,
        payload: data,
    }
}

const filter = (data) => {
    return {
        type: GET_FILTERED_TODOS,
        payload: data,
    }
}

const getOne = (data) => {
    return {
        type: GET_SINGLE_TODO,
        payload: data,
    }
}

const getToDos = (data) => {
    return {
        type: GET_USER_TODOS,
        payload: data,
    }
}

const createNew = (data) => {
    return {
        type: CREATE_TODO,
        payload: data
    }
}

const updateToDo = (data) => {
    return {
        type: UPDATE_TODO,
        payload: data,
    }
}

const deleteToDo = (data) => {
    return {
        type: DELETE_TODO,
        payload: data,
    }
}

export const getSearchedToDos = (query) => async (dispatch) => {
    try {
        const response = await fetch(`/api/search/custom/${query}`)
        if(response.ok) {
            const data = await response.json()
            const toDoData = data["ToDos"]
            dispatch(search(toDoData))
        } else {
            const errors = await response.json();
            return errors;
        }

    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const getFilteredToDos = (tags) => async (dispatch) => {
    try {
        const response = await fetch(`/api/search/${tags}`)
        if(response.ok) {
            const data = await response.json()
            const toDoData = data["ToDos"]
            dispatch(filter(toDoData))
        } else {
            const errors = await response.json();
            return errors;
        }

    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const updateToDoStatus = (id, updatedToDo) => async (dispatch) => {
    try {
        const request = await fetch(`/api/todos/${id}/update-status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedToDo)
        })

        const data = await request.json()
        const updatedVersion = data
        dispatch(updateToDo(updatedVersion))
        return updatedVersion
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const getOneToDo = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/todos/${id}`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getOne(data))
            return data
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const getUserToDos = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/todos/user-to-dos`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getToDos(data))
            return data
        } else {
            const errors = await response.json();
            return errors;
        }
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const createNewToDo = (title) => async (dispatch) => {
    try {
        const request = await fetch('/api/todos/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(title)
        })

        const data = await request.json()
        const createdToDo = data
        dispatch(createNew(createdToDo))
        return createdToDo
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const updateUserToDo = (id, updatedToDo) => async (dispatch) => {
    try {
        const request = await fetch(`/api/todos/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedToDo)
        })

        const data = await request.json()
        const updatedVersion = data
        dispatch(updateToDo(updatedVersion))
        return updatedVersion
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const deleteUserToDo = (id) => async (dispatch) => {
    const response = await fetch(`/api/todos/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        dispatch(deleteToDo(id))
    }

    return response
}

const initialState = { allToDos: {}, singleToDo: {} }
const toDosReducer = (state = initialState, action) => {
    // let newState
    switch(action.type) {
        case GET_USER_TODOS: {
            const newState = Object.assign({ ...state })
            newState.allToDos = action.payload
            return newState
        }
        case CREATE_TODO: {
            const newState = Object.assign({ ...state })
            newState.singleToDo = action.payload
            return newState
        }
        case UPDATE_TODO: {
            const newState = Object.assign({ ...state })
            newState.singleToDo = action.payload
            return newState

        }
        case DELETE_TODO: {
            const newState = Object.assign({ ...state })
            delete newState.allToDos[action.payload]
            return newState
        }
        case GET_SINGLE_TODO: {
            const newState = Object.assign({ ...state })
            newState.singleToDo = action.payload
            return newState
        }
        case GET_FILTERED_TODOS: {
            const newState = Object.assign({ ...state })
            newState.allToDos = action.payload
            return newState
        }
        case GET_SEARCHED_TODOS: {
            const newState = Object.assign({ ...state })
            newState.allToDos = action.payload
            return newState
        }
        default:
            return state
    }
}

export default toDosReducer;

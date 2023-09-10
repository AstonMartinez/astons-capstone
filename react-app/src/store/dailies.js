const GET_USER_DAILIES = '/dailies/getDailies'
const CREATE_DAILY = '/dailies/createNew'
const UPDATE_DAILY = '/dailies/updateDaily'
const DELETE_DAILY = '/dailies/deleteDaily'
const GET_SINGLE_DAILY = '/dailies/getOne'

const getOne = (data) => {
    return {
        type: GET_SINGLE_DAILY,
        payload: data,
    }
}

const getDailies = (data) => {
    return {
        type: GET_USER_DAILIES,
        payload: data,
    }
}

const createNew = (data) => {
    return {
        type: CREATE_DAILY,
        payload: data
    }
}

const updateDaily = (data) => {
    return {
        type: UPDATE_DAILY,
        payload: data,
    }
}

const deleteDaily = (data) => {
    return {
        type: DELETE_DAILY,
        payload: data,
    }
}

export const getOneDaily = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/dailies/${id}`)
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

export const getUserDailies = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/dailies/user-dailies`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getDailies(data))
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

export const createNewDaily = (title) => async (dispatch) => {
    try {
        const request = await fetch('/api/dailies/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(title)
        })

        const data = await request.json()
        const createdHabit = data
        dispatch(createNew(createdHabit))
        return createdHabit
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const updateUserDaily = (id, updatedDaily) => async (dispatch) => {
    try {
        const request = await fetch(`/api/dailies/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedDaily)
        })

        const data = await request.json()
        const updatedVersion = data
        dispatch(updateDaily(updatedVersion))
        return updatedVersion
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const deleteUserDaily = (id) => async (dispatch) => {
    const response = await fetch(`/api/dailies/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        dispatch(deleteDaily(id))
    }

    return response
}

const initialState = { allDailies: {}, singleDaily: {} }
const dailiesReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_USER_DAILIES:
            newState = Object.assign({ ...state })
            newState.allDailies = action.payload
            return newState
        case CREATE_DAILY:
            newState = Object.assign({ ...state })
            newState.singleDaily = action.payload
            return newState
        case UPDATE_DAILY:
            newState = Object.assign({ ...state })
            newState.singleDaily = action.payload
            return newState
        case DELETE_DAILY:
            newState = Object.assign({ ...state })
            delete newState.allDailies[action.payload]
            return newState
        case GET_SINGLE_DAILY:
            newState = Object.assign({ ...state })
            newState.singleDaily = action.payload
            return newState
        default:
            return state
    }
}

export default dailiesReducer;

const GET_USER_HABITS = '/habits/getHabits'
const CREATE_HABIT = '/habits/createNew'
const UPDATE_HABIT = '/habits/updateHabit'
const DELETE_HABIT = '/habits/deleteHabit'
const GET_SINGLE_HABIT = '/habits/getOne'

const getHabits = (data) => {
    return {
        type: GET_USER_HABITS,
        payload: data,
    }
}

const createNew = (data) => {
    return {
        type: CREATE_HABIT,
        payload: data
    }
}

const updateHabit = (data) => {
    return {
        type: UPDATE_HABIT,
        payload: data,
    }
}

const deleteHabit = (data) => {
    return {
        type: DELETE_HABIT,
        payload: data,
    }
}

const getOne = (data) => {
    return {
        type: GET_SINGLE_HABIT,
        payload: data,
    }
}

export const getOneHabit = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/habits/${id}`)
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

export const getUserHabits = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/habits/user-habits`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getHabits(data))
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

export const createNewHabit = (title) => async (dispatch) => {
    try {
        const request = await fetch('/api/habits/new', {
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

export const updateUserHabit = (id, updatedHabit) => async (dispatch) => {
    try {
        const request = await fetch(`/api/habits/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedHabit)
        })

        const data = await request.json()
        const updatedVersion = data
        dispatch(updateHabit(updatedVersion))
        return updatedVersion
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const deleteUserHabit = (id) => async (dispatch) => {
    const response = await fetch(`/api/habits/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        dispatch(deleteHabit(id))
    }

    return response
}

const initialState = { allHabits: {}, singleHabit: {} }
const habitsReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_USER_HABITS:
            newState = Object.assign({ ...state })
            newState.allHabits = action.payload
            return newState
        case CREATE_HABIT:
            newState = Object.assign({ ...state })
            newState.singleHabit = action.payload
            return newState
        case UPDATE_HABIT:
            newState = Object.assign({ ...state })
            newState.singleHabit = action.payload
            return newState
        case DELETE_HABIT:
            newState = Object.assign({ ...state })
            delete newState.allHabits[action.payload]
            return newState
        case GET_SINGLE_HABIT:
            newState = Object.assign({ ...state })
            newState.singleHabit = action.payload
            return newState
        default:
            return state
    }
}

export default habitsReducer;

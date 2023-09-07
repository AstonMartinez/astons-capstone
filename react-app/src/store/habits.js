const GET_USER_HABITS = '/habits/getHabits'

const getHabits = (data) => {
    return {
        type: GET_USER_HABITS,
        payload: data,
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

const initialState = { allHabits: {}, singleHabit: {} }
const habitsReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_USER_HABITS:
            newState = Object.assign({ ...state })
            newState.allHabits = action.payload
            return newState
        default:
            return state
    }
}

export default habitsReducer;

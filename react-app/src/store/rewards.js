const GET_USER_REWARDS = '/rewards/getRewards'
const CREATE_REWARD = '/rewards/createNew'
const UPDATE_REWARD = '/rewards/updateReward'
const DELETE_REWARD = '/rewards/deleteReward'
const GET_SINGLE_REWARD = '/rewards/getOne'

const getOne = (data) => {
    return {
        type: GET_SINGLE_REWARD,
        payload: data,
    }
}

const getRewards = (data) => {
    return {
        type: GET_USER_REWARDS,
        payload: data,
    }
}

const createNew = (data) => {
    return {
        type: CREATE_REWARD,
        payload: data
    }
}

const updateReward = (data) => {
    return {
        type: UPDATE_REWARD,
        payload: data,
    }
}

const deleteReward = (data) => {
    return {
        type: DELETE_REWARD,
        payload: data,
    }
}


export const getOneReward = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/rewards/${id}`)
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

export const getUserRewards = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/rewards/user-rewards`)
        if(response.ok) {
            const data = await response.json()
            dispatch(getRewards(data))
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

export const createNewReward = (reward) => async (dispatch) => {
    try {
        const request = await fetch('/api/rewards/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reward)
        })

        const data = await request.json()
        const createdReward = data
        dispatch(createNew(createdReward))
        return createdReward
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const updateUserReward = (id, updatedReward) => async (dispatch) => {
    try {
        const request = await fetch(`/api/rewards/${id}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedReward)
        })

        const data = await request.json()
        const updatedVersion = data
        dispatch(updateReward(updatedVersion))
        return updatedVersion
    } catch (error) {
        const errors = (error && error.json) ? await error.json() : { message: error.toString() }
        return errors
    }
}

export const deleteUserReward = (id) => async (dispatch) => {
    const response = await fetch(`/api/rewards/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        dispatch(deleteReward(id))
    }

    return response
}

const initialState = { allRewards: {}, singleReward: {} }
const rewardsReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_USER_REWARDS:
            newState = Object.assign({ ...state })
            newState.allRewards = action.payload
            return newState
        case CREATE_REWARD:
            newState = Object.assign({ ...state })
            newState.singleReward = action.payload
            return newState
        case UPDATE_REWARD:
            newState = Object.assign({ ...state })
            newState.singleReward = action.payload
            return newState
        case DELETE_REWARD:
            newState = Object.assign({ ...state })
            delete newState.allRewards[action.payload]
            return newState
        case GET_SINGLE_REWARD:
            newState = Object.assign({ ...state })
            newState.singleReward = action.payload
            return newState
        default:
            return state
    }
}

export default rewardsReducer;

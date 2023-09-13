const GET_USER_AVATAR = '/avatars/getCurrent'
const UPDATE_USER_AVATAR = '/avatars/update'

const update = (data) => {
    return {
        type: UPDATE_USER_AVATAR,
        payload: data,
    }
}

const getCurrent = (data) => {
    return {
        type: GET_USER_AVATAR,
        payload: data,
    }
}

export const updateUserAvatar = (updatedAvatar) => async (dispatch) => {
    try {
        const response = await fetch('/api/avatar/update', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedAvatar)
        })
        if(response.ok) {
            const data = await response.json()
            dispatch(update(data))
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getUserAvatar = () => async (dispatch) => {
    try {
        const response = await fetch('/api/avatar/current')
        if(response.ok) {
            const data = await response.json()
            dispatch(getCurrent(data))
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

const initialState = {}
const avatarReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_USER_AVATAR:
            newState = Object.assign({ ...state })
            newState = action.payload
            return newState
        case UPDATE_USER_AVATAR:
            newState = Object.assign({ ...state })
            newState = action.payload
            return newState
        default:
            return state
    }
}

export default avatarReducer;

const GET_USER_EQUIPMENT = '/equipment/getCurrent'
// const UPDATE_USER_EQUIPMENT = '/equipment/update'

// const update = (data) => {
//     return {
//         type: GET_USER_EQUIPMENT,
//         payload: data,
//     }
// }

const getCurrent = (data) => {
    return {
        type: GET_USER_EQUIPMENT,
        payload: data,
    }
}

export const getUserEquipment = () => async (dispatch) => {
    try {
        const response = await fetch('/api/users/inventory')
        if(response.ok) {
            const data = await response.json()
            dispatch(getCurrent(data))
        }
    } catch (error) {
        return error
    }
}

const initialState = {}
const equipmentReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case GET_USER_EQUIPMENT:
            newState = Object.assign({ ...state })
            newState = action.payload
            return newState
        // case UPDATE_USER_AVATAR:
        //     newState = Object.assign({ ...state })
        //     newState = action.payload
        //     return newState
        default:
            return state
    }
}

export default equipmentReducer;

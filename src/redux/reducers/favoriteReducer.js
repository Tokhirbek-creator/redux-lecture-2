import { initState } from '../init/initState'
import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE, EDIT_FAVORITE } from '../types/charactersTypes'

export const favoriteReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE :
            if (state.includes(action.payload)) {
                return state
            }
            return [...state, action.payload]

        case DELETE_FROM_FAVORITE :
            return state.filter(el => el.id !== action.payload)

        case EDIT_FAVORITE :
            return state.map(el => {
                if (el.id === action.payload.id) {
                    return action.payload
                }
                return el
            })

        default:
            return state
    }
}

import { initState } from '../init/initState'
import { GET_CHARACTERS } from '../types/charactersTypes'

export const charactersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CHARACTERS :
            return action.payload

        default: return state
    }
}

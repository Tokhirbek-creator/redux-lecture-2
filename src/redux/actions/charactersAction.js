import { GET_CHARACTERS } from '../types/charactersTypes'

export const ACTION_getCharacters = (charactersArray) => {
    return {
        type: GET_CHARACTERS,
        payload: charactersArray
    }
}

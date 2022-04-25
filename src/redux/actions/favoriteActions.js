import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE, EDIT_FAVORITE } from '../types/charactersTypes'

export const ACTION_addToFavorite = (character) => ({
    type: ADD_TO_FAVORITE,
    payload: character
})

export const ACTION_deleteFromFavorite = (id) => ({
    type: DELETE_FROM_FAVORITE,
    payload: id
})

export const ACTION_editFavorite = (character) => {
    console.log(character, 'action creator')
    return {
        type: EDIT_FAVORITE,
        payload: character
    }
}

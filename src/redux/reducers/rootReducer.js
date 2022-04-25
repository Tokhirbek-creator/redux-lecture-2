import { combineReducers } from 'redux'
import { charactersReducer } from './charactersReducer'
import { favoriteReducer } from './favoriteReducer'

export const rootReducer = combineReducers({
    characters: charactersReducer,
    favorite: favoriteReducer,
})

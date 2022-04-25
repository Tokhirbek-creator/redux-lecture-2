import axios from 'axios'
import { ACTION_getCharacters } from '../actions/charactersAction'

export const THUNK_getCharactersFromDb = () => async (dispatch) => {
    const response = await axios.get('https://rickandmortyapi.com/api/character?count=10')
    dispatch(ACTION_getCharacters(response.data.results))
}

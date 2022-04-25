import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { THUNK_getCharactersFromDb } from '../../../redux/thunks/characters'
import OneCharacter from '../../common/OneCharacter/OneCharacter'
import './MainPage.scss'

function MainPage() {
    const characters = useSelector(state => state.characters)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(THUNK_getCharactersFromDb())
    }, [])

    return (
        <div className="mainpage">
            {characters && characters.map(rick => <OneCharacter key={rick.id} rick={rick}/>)}
        </div>
    )
}

export default MainPage

import React from 'react'
import { useDispatch } from 'react-redux'
import { ACTION_addToFavorite } from '../../../redux/actions/favoriteActions'

const OneCharacter = ({rick}) => {
    const dispatch = useDispatch()

    const favoriteHandler = () => {
        dispatch(ACTION_addToFavorite(rick))
    }

    return (
        <div>
            <p>{rick.name}</p>
            <p>{rick.status}</p>
            <p>{rick.gender}</p>
            <p>{rick.species}</p>
            <button onClick={favoriteHandler}>add to favorite</button>
            <img src={rick.image} alt=""/>
        </div>
    )
}

export default OneCharacter

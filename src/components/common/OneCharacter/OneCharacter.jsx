import React from 'react'
import { useDispatch } from 'react-redux'
import { ACTION_addToFavorite } from '../../../redux/actions/favoriteActions'
import './OneCharacter.scss'

const OneCharacter = ({rick}) => {
    const dispatch = useDispatch()

    const favoriteHandler = () => {
        dispatch(ACTION_addToFavorite(rick))
    }

    return (
        <div className="character">
            <div className="character__top">
                <img src={rick.image} alt="person"/>
            </div>
            <div className="character__bottom">
                <p>{rick.name}</p>
                <p>{rick.status}</p>
                <p>{rick.gender}</p>
                <p>{rick.species}</p>
            </div>
            <div className="character__buttons">
                <button onClick={favoriteHandler}>add to favorite</button>
            </div>
        </div>
    )
}

export default OneCharacter

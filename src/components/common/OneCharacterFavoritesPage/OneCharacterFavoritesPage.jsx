import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_deleteFromFavorite } from '../../../redux/actions/favoriteActions'

const OneCharacterFavoritesPage = ({rick}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const navigateHandler = () => {
        navigate(`/${rick.id}`)
    }

    const deleteHandler = () => dispatch(ACTION_deleteFromFavorite(rick.id))

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
                <button onClick={navigateHandler}>Go to card</button>
                <button onClick={deleteHandler}>Delete from favorite</button>
            </div>
        </div>
    )
}

export default OneCharacterFavoritesPage


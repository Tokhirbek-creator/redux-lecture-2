import React from 'react'
import { useSelector } from 'react-redux'
import OneCharacterFavoritesPage from '../../common/OneCharacterFavoritesPage/OneCharacterFavoritesPage'

const FavoritesPage = () => {
    const favorite = useSelector(state => state.favorite)
    return (
        <div>
            {favorite && favorite.map(el => <OneCharacterFavoritesPage key={el.key} rick={el}/>)}
        </div>
    )
}

export default FavoritesPage

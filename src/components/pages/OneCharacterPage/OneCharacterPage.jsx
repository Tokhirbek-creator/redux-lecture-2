import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ACTION_editFavorite } from '../../../redux/actions/favoriteActions'

const OneCharacterPage = () => {
    const {id} = useParams()
    const characters = useSelector(state => state.characters)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const oneCharacter = useMemo(() => {
        return characters.find(el => el.id === Number(id))
    }, [characters])

    const [formData, setFormData] = useState({
        name: oneCharacter.name || '',
        status: oneCharacter.status || '',
        gender: oneCharacter.gender || '',
        species: oneCharacter.species || ''
    })

    const inputHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const saveHandler = () => {
        const {name, status, gender, species} = formData
        dispatch(ACTION_editFavorite({
            ...oneCharacter,
            name,
            status,
            gender,
            species
        }))
        navigate('/favorite')
    }

    return (
        <>
            {oneCharacter && <div className="character">
                <div className="character__top">
                    <img src={oneCharacter.image} alt=""/>
                </div>
                <div className="character__bottom">
                    <input onChange={inputHandler} name="name" type="text" value={formData.name}/>
                    <input onChange={inputHandler} name="status" type="text" value={formData.status}/>
                    <input onChange={inputHandler} name="gender" type="text" value={formData.gender}/>
                    <input onChange={inputHandler} name="species" type="text" value={formData.species}/>
                </div>
                <div className="character__buttons">
                    <button onClick={saveHandler}>Save</button>
                </div>
            </div>}
        </>
    )
}

export default OneCharacterPage

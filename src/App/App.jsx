import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FavoritesPage from '../components/pages/FavoritesPage/FavoritesPage'
import MainPage from '../components/pages/MainPage/MainPage'
import OneCharacterPage from '../components/pages/OneCharacterPage/OneCharacterPage'
import Header from '../components/UI/Header/Header'

const App = () => {
    return (
        <div className="wrapper">
            <div className="main-container">
                <main className="main">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/:id" element={<OneCharacterPage/>}/>
                        <Route path="/favorite" element={<FavoritesPage/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export default App

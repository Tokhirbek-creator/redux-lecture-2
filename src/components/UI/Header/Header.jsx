import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <div className="header-container ">
                <Link to={'/'}>
                    Home
                </Link>
                <Link to={'/favorite'}>
                    Favorite
                </Link>
            </div>
        </header>
    )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className='navbar-brand'>
                <Link to="/">Movie App</Link>
            </div>
            <div>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/favorites" className='nav-link'>Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar
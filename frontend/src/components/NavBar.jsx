import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/CineManga Logo.png'

const NavBar = () => {
    return (
        <nav className='navbar bg-[#121212] sticky top-0 left-0 z-10 border-b border-b-[#252525] flex justify-between'>
            <div className='navbar-brand'>
                <Link to="/">
                    <img className='h-16 fixed top-1 left-0' src={logo} alt="CineManga" />
                </Link>
            </div>
            <div className='flex gap-4 font-semibold m-4'>
                <NavLink to="/" className='nav-link  px-2'>Home</NavLink>
                <NavLink to="/favorites" className='nav-link px-2'>Favorites</NavLink>
            </div>
        </nav>
    )
}

export default NavBar
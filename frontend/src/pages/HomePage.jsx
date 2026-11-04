import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {
            id: 1,
            title: "Attack On Titan",
            release_date: "2024"
        },
        {
            id: 2,
            title: "Vinland Saga",
            release_date: "2020"
        },
        {
            id: 3,
            title: "Naruto",
            release_date: "1998"
        },
        {
            id: 4,
            title: "Monster",
            release_date: "2004"
        }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (
        <div className='home-page'>
            <form className='search-form' onSubmit={handleSearch}>
                <input 
                className='search-input' 
                type="text" 
                placeholder='Search for movies...' 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='search-button' type='submit'>Search</button>
            </form>
            <div className='movie-grid'>
                {movies.map((movie) => 
                movie.title.toLocaleLowerCase().includes(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default HomePage
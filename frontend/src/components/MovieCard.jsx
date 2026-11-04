import React from 'react'
import { Heart } from 'lucide-react';

function onFavoriteClick(){
    alert("Favorite Button Clicked!")
}

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={movie.img} alt={movie.title} />
                <div>
                    <button className='favorite-btn' onClick={onFavoriteClick}>
                        <Heart />
                    </button>
                </div>
            </div>
            <div className='movie-info'>
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard
import React from 'react'
import { Heart } from 'lucide-react';

function onFavoriteClick(e){
    const heart = e.currentTarget.querySelector('svg');
    if (!heart) return;

    const removingFavorite = heart.classList.contains('fill-rose-400');

    heart.classList.toggle('text-rose-400');
    heart.classList.toggle('fill-rose-400');
    heart.classList.remove('anim', 'anim-remove');
    void heart.offsetWidth;
    heart.classList.add(removingFavorite ? 'anim-remove' : 'anim');
}

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card cursor-pointer w-fit flex flex-col relative'>
            <div className='movie-poster relative rounded-xl overflow-hidden'>
                <img className='h-80 w-52 transition-all duration-500 object-cover rounded-xl' src={movie.img} alt={movie.title} />
                <div className='absolute top-2 right-2'>
                    <button className='favorite-btn' onClick={onFavoriteClick}>
                        <Heart
                            className="cursor-pointer hover:scale-120 transition-all hover:text-rose-400 hover:fill-rose-400"
                            onAnimationEnd={(e) => e.currentTarget.classList.remove('anim', 'anim-remove')}
                        />
                    </button>
                </div>
            </div>
            <div className='movie-info m-2'>
                <h2 className='text-[#ffffff]'>{movie.title}</h2>
                <p className='text-[#a2a2a2] text-sm'>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard
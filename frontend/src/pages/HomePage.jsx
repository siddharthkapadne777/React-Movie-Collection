import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'
import { Search } from 'lucide-react'

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigobSp1b1DRmp6xeC4hcycUCRnUXcP3XQTxdkHxd14w&s=10",
            title: "Attack On Titan",
            release_date: "2024"
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrADphPttwkBDM1F8aHYqYRlQ-Q32EteEUJVcG0AOzDA&s=10",
            title: "Vinland Saga",
            release_date: "2020"
        },
        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwu5tp5VXFscxrNB4qp2XuMBcv-0LiA8_CHtO8qHkEg&s=10",
            title: "Naruto",
            release_date: "1998"
        },
        {
            id: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNBe53HFuxv2tQCXu8U8-EkHyzzWXl3wBOXRjBj7siw&s=10",
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
            <form className='search-form w-[calc(100%-2rem)] max-w-96 flex justify-center items-center m-auto mt-4 bg-[#202020] rounded-xl' onSubmit={handleSearch}>
                <input
                    className='search-input w-full p-2 outline-none transition-all'
                    type="text"
                    placeholder='Search for movies...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='search-button w-fit p-2 cursor-pointer bg-[#F70E21] text-white rounded-r-xl' type='submit'><Search /></button>
            </form>
            <div className="movie-grid mx-auto my-8 grid w-[calc(100%-2rem)] grid-cols-[repeat(auto-fill,minmax(min(100%,13rem),13rem))] justify-center gap-8">
                {movies.map((movie) =>
                    movie.title.toLocaleLowerCase().includes(searchQuery) && (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    )
}

export default HomePage
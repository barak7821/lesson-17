import React, { useContext } from 'react'
import { MovieContext } from '../utils/MovieContext'

export default function TopMovies({ onSelectMovie }) {
    const { movies } = useContext(MovieContext)
    const topMovies = [...movies].sort((a, b) => b.rate - a.rate).slice(0, 3)

    return (
        <div className='flex items-center justify-center gap-[12%] py-2 text-5xl mx-10'>
            {topMovies.map((movie, index) => (
                <button onClick={() => { onSelectMovie(movie) }} key={index} style={{ backgroundImage: `url(${movie.imgUrl})`, backgroundSize: '100% 150%', backgroundPosition: 'top' }} className='w-80 h-40 text-white rounded-xl shadow-xl bg-no-repeat bg-black hover:scale-105 active:scale-95 duration-300'>{movie.name}</button>
            ))}
        </div>
    )
}
import React, { useContext } from 'react'
import { MovieContext } from '../utils/MovieContext'

export default function SideBar({ onSelectMovie }) {
    const { movies } = useContext(MovieContext)

    return (
        <div className='grid w-full h-full'>
            {movies.slice(3, 8).map((movie, index) => (
                <button onClick={() => { onSelectMovie(movie) }} key={index} style={{ backgroundImage: `url(${movie.imgUrl})`, backgroundSize: '100% 150%', backgroundPosition: 'top' }} className='w-60 h-30 text-white font-bold text-xl rounded-xl shadow-xl bg-no-repeat bg-cover bg-center hover:scale-105 active:scale-95 duration-300'>
                    {movie.name}
                </button>

            ))}
        </div>
    )
}

import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import TopMovies from '../components/TopMovies'
import { MovieContext } from '../utils/MovieContext'

export default function DeleteMovie() {
    const { removeMovie } = useContext(MovieContext)
    const [movieName, setMovieName] = useState("")

    const handleClick = () => {
        if (!movieName.trim()) {
            alert("Please enter a movie name")
            return
        }

        console.log(movieName)
        removeMovie(movieName)
        setMovieName("")

        alert("Movie Removed!")
    }

    return (
        <div className='min-h-screen bg-gray-100'>
            <h1 className='font-bold text-5xl justify-center flex py-5'>Best Movie</h1>
            <NavBar />
            <TopMovies />

            <div className='bg-gray-200 rounded-2xl shadow-2xl px-8 my-10 max-w-xl mx-auto flex items-center flex-col h-auto gap-5'>
                <h1 className='text-2xl font-semibold py-2'>Delete a Movie</h1>
                <input onChange={(e) => { setMovieName(e.target.value) }} type='text' className='p-1 rounded-xl border text-xl text-center' placeholder="Movie's Name" />
                <button onClick={handleClick} className='bg-blue-500 rounded-full text-white p-5 active:scale-95 hover:scale-105 duration-300 cursor-pointer m-5'>
                    Delete
                </button>
            </div>
        </div>
    )
}

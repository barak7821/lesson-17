import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import TopMovies from '../components/TopMovies'
import { MovieContext } from '../utils/MovieContext'

export default function AddMovie() {
    const { addMovie } = useContext(MovieContext)
    const [movieName, setMovieName] = useState("")
    const [movieDescription, setMovieDescription] = useState("")
    const [movieImgUrl, setMovieImgUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (movieDescription.length > 200) {
            Alert("Description must be less than 200 characters.")
            return
        }

        if (!/^[a-zA-Z0-9\s.,!?'-]*$/.test(movieDescription)) {
            Alert("Description must be in English.")
            return
        }

        const newMovie = {
            index: Date.now().toString(),
            name: movieName.toLowerCase(),
            description: movieDescription,
            imgUrl: movieImgUrl,
        }

        addMovie(newMovie)

        setMovieName("")
        setMovieDescription("")
        setMovieImgUrl("")

        alert("Movie Added!")
    }

    return (
        <div className='min-h-screen bg-gray-100'>
            <h1 className='font-bold text-5xl justify-center flex py-5'>Best Movie</h1>
            <NavBar />
            <TopMovies />

            <form onSubmit={handleSubmit} className='bg-gray-200 rounded-2xl shadow-2xl px-8 my-10 max-w-xl mx-auto flex items-center flex-col h-auto gap-5'>
                <h1 className='text-2xl font-semibold py-2'>Add a New Movie!</h1>
                <input type='text' value={movieName} onChange={(e) => setMovieName(e.target.value)} className='p-1 rounded-xl border text-xl text-center' placeholder="Movie's Name" required />
                <input type='text' value={movieImgUrl} onChange={(e) => setMovieImgUrl(e.target.value)} className='p-1 rounded-xl border text-xl text-center' placeholder="Movie's picture URL" />
                <textarea value={movieDescription} onChange={(e) => setMovieDescription(e.target.value)} className='p-1 rounded-xl border text-xl text-center' placeholder="Description" required />
                <button type="submit" className='bg-blue-500 rounded-full text-white p-5 active:scale-95 hover:scale-105 duration-300 cursor-pointer m-5'>
                    Add Movie!
                </button>
            </form>
        </div>
    )
}

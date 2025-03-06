import React, { useContext, useState } from 'react'
import NavBar from '../components/NavBar'
import TopMovies from '../components/TopMovies'
import SideBar from '../components/SideBar'
import { MovieContext } from '../utils/MovieContext'
import Search from '../components/Search'

export default function Main() {
    const { movies } = useContext(MovieContext)
    const [rate, setRate] = useState("")
    const [newRate, setNewRate] = useState("")
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [showSearch, setShowSearch] = useState(false)

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie)
    }

    const handleRate = (newRate) => {
        if (selectedMovie) {
            const updatedMovie = { ...selectedMovie, rate: newRate }

            const updatedMoviesList = movies.map(movie =>
                movie.index === updatedMovie.index ? updatedMovie : movie
            )

            setRate(newRate)
            setSelectedMovie(updatedMovie)

            const averageRating = updatedMoviesList.reduce((acc, movie) => acc + +movie.rate, 0) / updatedMoviesList.length
            setNewRate(averageRating)
        }
    }

    return (
        <div className='min-h-screen bg-gray-100'>
            <h1 className='font-bold text-5xl justify-center flex py-5'>Best Movie</h1>
            <NavBar setShowSearch={setShowSearch} />
            <TopMovies onSelectMovie={handleSelectMovie} />

            <div className='grid grid-cols-12'>
                <div className='col-span-10'>
                    {selectedMovie ? (
                        <div className='bg-gray-200 rounded-2xl shadow-2xl px-20 my-5 max-w-xl mx-auto flex items-center flex-col max-h-[100%] overflow-y-auto'>
                            <h1 className='font-bold text-2xl py-2'>Movie's Name: {selectedMovie.name}</h1>
                            <img className='w-full max-h-100 object-contain' src={selectedMovie.imgUrl} alt={selectedMovie.name} />
                            <h2 className='py-1 font-semibold'>Description:</h2>
                            <p>{selectedMovie.description}</p>
                            <span className='font-semibold'>Rate this movie:</span>
                            <span className='flex w-64 py-2'>
                                {[1, 2, 3, 4, 5].map(num => (
                                    <button key={num} onClick={() => { handleRate(num) }} className={`border rounded-xl p-2 w-24 h-10 ${rate === num ? 'bg-blue-600' : 'bg-blue-400'} 
                                        text-white active:scale-95 hover:scale-105 duration-300 cursor-pointer`}>{num}</button>))}
                            </span>
                            <div className="mt-4">
                                <p className="font-semibold">Average Rating: {newRate}</p>
                            </div>
                        </div>
                    ) : (
                        <div className='flex items-center flex-col justify-center min-h-[50%]'>
                            <p className='text-center'>Select a movie to see details</p>
                        </div>

                    )}
                </div>
                {showSearch ? <Search onSelectMovie={handleSelectMovie} /> : <SideBar onSelectMovie={handleSelectMovie} />}
            </div>
        </div>
    )
}

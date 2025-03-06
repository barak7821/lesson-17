import React, { createContext, useState, useContext } from 'react'
import moviesList from '../utils/moviesList'

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState(moviesList)

    const updateMovies = (newMovies) => {
        setMovies(newMovies)
    }

    const addMovie = (newMovie) => {
        setMovies((prevMovies) => [...prevMovies, newMovie])
    }

    const removeMovie = (name) => {
        setMovies((prevMovies) => prevMovies.filter(movie => movie.name.toLowerCase() !== name.toLowerCase()))
    }

    return (
        <MovieContext.Provider value={{ movies, updateMovies, addMovie, removeMovie }}>
            {children}
        </MovieContext.Provider>
    )
}
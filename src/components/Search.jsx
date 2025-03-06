import React, { useContext, useState } from 'react'
import { MovieContext } from '../utils/MovieContext'

export default function Search({ onSelectMovie }) {
  const { movies } = useContext(MovieContext)
  const [searchValue, setSearchValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [foundedMovies, setFoundedMovies] = useState([])

  const handleClick = () => {
    const found = movies.filter(movie =>
      movie.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    if (found.length === 1) {
      onSelectMovie(found[0])
      setIsOpen(false)
      console.log(found, isOpen)
    } else if (found.length > 1) {
      setFoundedMovies(found)
      setIsOpen(true)
      // setFoundedMovies(found.map(movie => movie.name))
      console.log(found, isOpen)
    } else {
      setFoundedMovies([])
      setIsOpen(false)
      alert("Movie not found")
    }
  }


  return (
    <div className='flex flex-col justify-center items-center'>
      <input onChange={(e) => { setSearchValue(e.target.value) }} className='border rounded-2xl p-5 w-64 mr-30 mb-10 text-2xl' type="text" placeholder="Movie's Name" />
      <button onClick={handleClick} className='rounded-full bg-blue-500 text-white p-10 mr-30 text-2xl'>Search</button>
      {isOpen && (
        <div className='flex flex-col items-center mt-5 p-5 gap-5'>
          <label className='text-2xl font-bold'>Select a Movie</label>
          <select
            className='rounded-xl border p-2'
            onChange={(e) => {
              const selected = foundedMovies.find(movie => movie.name === e.target.value)
              onSelectMovie(selected)
              setIsOpen(false)
            }}>
            <option value="">-- Select a movie --</option>
            {foundedMovies.map((movie, index) => (
              <option key={index} value={movie.name}>{movie.name}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}

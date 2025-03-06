import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search'

export default function NavBar({ setShowSearch }) {
  const nav = useNavigate()

  const handleSearchClick = () => {
    if (!setShowSearch) {
      nav("/")
    }
    setShowSearch(prev => !prev)
  }

  return (
    <nav className='bg-black flex justify-center text-white shadow-2xl'>
      <ul className='flex flex-row items-center py-5 gap-10 text-xl'>
        <li className='cursor-pointer font-semibold hover:scale-105 active:scale-95 duration-300'><Link to="/">Home</Link></li>
        <li className='cursor-pointer font-semibold hover:scale-105 active:scale-95 duration-300'><Link to="/add">Add</Link></li>
        <li className='cursor-pointer font-semibold hover:scale-105 active:scale-95 duration-300'><Link to="/delete">Delete</Link></li>
        <li className='cursor-pointer font-semibold hover:scale-105 active:scale-95 duration-300'><button onClick={handleSearchClick}>Search</button></li>
      </ul>
    </nav>
  )
}

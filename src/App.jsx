import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import AddMovie from './pages/AddMovie'
import { MovieProvider } from './utils/MovieContext.jsx'
import DeleteMovie from './pages/DeleteMovie.jsx'

function App() {

  return (
    <MovieProvider>
      <Routes>
        <Route index element={<Main />} />
        <Route path='/add' element={<AddMovie />} />
        <Route path='/delete' element={<DeleteMovie />} />
        <Route path="*" element={<p className='flex justify-center items-center min-h-screen font-bold text-3xl'>This route does not exist</p>} />
      </Routes>
    </MovieProvider>
  )
}

export default App

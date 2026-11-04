import React from 'react'
import MovieCard from './components/MovieCard'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import FavoritePages from './pages/FavoritePages'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<FavoritePages />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
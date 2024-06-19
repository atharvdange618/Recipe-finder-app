import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Favouritespage from './pages/Favouritespage'

const App = () => {
  return (
    <div className=' flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/favourites' element={<Favouritespage />} />
      </Routes>
    </div>
  )
}

export default App  
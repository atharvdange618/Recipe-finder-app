import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div className=' flex'>
      <Sidebar />
      <Homepage />
    </div>
  )
}

export default App
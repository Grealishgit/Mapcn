
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainMap from './pages/MainMap'
import { MiniMaps } from './pages/MiniMaps'

function App() {



  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route path="/map" element={<MainMap />} />
        <Route path="/" element={<MiniMaps />} />
      </Routes>
    </>
  )
}

export default App

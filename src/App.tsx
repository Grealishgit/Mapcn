
// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainMap from './pages/MainMap'
import { MiniMaps } from './pages/MiniMaps'
import { MapRoutes } from './pages/MapRoutes'

function App() {



  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route path="/map" element={<MainMap />} />
        <Route path="/mini-maps" element={<MiniMaps />} />
        <Route path="/routes" element={<MapRoutes />} />
      </Routes>
    </>
  )
}

export default App

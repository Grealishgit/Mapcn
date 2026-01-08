
// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainMap from './pages/MainMap'
import { MiniMaps } from './pages/MiniMaps'
import { MapRoutes } from './pages/MapRoutes'
import MapClusters from './pages/MapClusters'

function App() {



  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route path="/map" element={<MainMap />} />
        <Route path="/mini-maps" element={<MiniMaps />} />
        <Route path="/" element={<MapRoutes />} />
        <Route path="/clusters" element={<MapClusters />} />
      </Routes>
    </>
  )
}

export default App

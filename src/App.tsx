
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainMap from './pages/MainMap'

function App() {



  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<MainMap />} />
      </Routes>
    </>
  )
}

export default App

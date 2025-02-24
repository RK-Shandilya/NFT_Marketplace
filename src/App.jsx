import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import './App.css'
import Explore from './pages/Explore'
import NftDetail from './pages/NftDetail'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<NftDetail/>} />
      </Routes>
    </Router>
  )
}

export default App

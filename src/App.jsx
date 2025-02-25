import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import './App.css'
import Explore from './pages/Explore'
import NftDetail from './pages/NftDetail'
import CardDetails from './pages/CardDetails'
import Announcements from './pages/Announcement'
import LevelUpReward from './pages/Rewards'
import Earn from './pages/Earn'
import DepositNFT from './pages/DepositNFT'
import Dashboard from './pages/Reserve'
import AnnouncementDetail from './pages/AnnouncementDetail'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<NftDetail/>} />
        <Route path='/detail/:id' element={<CardDetails />} />
        <Route path='/announcements' element={<Announcements />} />
        <Route path='/announcement/:id' element={<AnnouncementDetail />} />
        <Route path='/collection' element={<Earn />} />
        <Route path="/rewards" element={<LevelUpReward />} />
        <Route path='/depositNFT' element={<DepositNFT />} />
        <Route path='/store/defi' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App

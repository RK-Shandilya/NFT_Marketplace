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
import Reserve from './pages/Reserve'
import AnnouncementDetail from './pages/AnnouncementDetail'
import Dashboard from './pages/Dashboard'
import Message from './pages/Message'
import Wallet from './pages/Wallet'
import LoginModal from './pages/Login'

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
        <Route path='/store/defi' element={<Reserve/>}/>
        <Route path='/user' element={<Dashboard/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/wallet' element={<Wallet/>}></Route>
        <Route path='/login' element={<LoginModal/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

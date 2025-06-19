import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Activities from './pages/Activities.jsx'
import Booking from './pages/Booking.jsx'
import Profile from './pages/profile.jsx'
import Login from './pages/login.jsx'
import Register from './pages/Register.jsx'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { getToken, removeToken } from './lib/auth'
import { useEffect, useState } from 'react'
import { getProfile } from './lib/api'

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = getToken()
    if (!token) return
    getProfile(token)
      .then(res => setUser(res.data))
      .catch(() => { setUser(null); removeToken() })
  }, [])

  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={() => { removeToken(); setUser(null); window.location = '/' }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

import { useEffect, useState } from 'react'
import { getProfile, getMyBookings } from '../lib/api'
import { getToken, removeToken } from '../lib/auth'
import Navbar from "../components/Navbar.jsx"
import ActivityCard from "../components/ActivityCard.jsx"
import Footer from "../components/Footer.jsx"

export default function Profile() {
  const [profile, setProfile] = useState(null)
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const token = getToken()
    if (!token) return
    getProfile(token).then(res => setProfile(res.data))
    getMyBookings(token).then(res => setBookings(res.data))
  }, [])

  if (!profile) return <div>Chargement...</div>

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Mon profil</h2>
      <div className="mb-6">
        <div><b>Nom :</b> {profile.name}</div>
        <div><b>Email :</b> {profile.email}</div>
      </div>
      <h3 className="font-bold mb-2">Mes réservations</h3>
      <ul>
        {bookings.map(b => (
          <li key={b.id} className="border-b py-2">
            {b.activities?.nom} le {b.date} — {b.payment_status}
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded" onClick={() => { removeToken(); window.location.reload() }}>Déconnexion</button>
    </div>
  )
}
import { useEffect, useState } from 'react'
import { getProfile, getMyBookings } from '../lib/api'
import { getToken, removeToken } from '../lib/auth'

export default function Profile() {
  const [profile, setProfile] = useState(null)
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const token = getToken()
    if (!token) return
    getProfile(token).then(res => setProfile(res.data))
    getMyBookings(token).then(res => setBookings(res.data))
  }, [])

  if (!profile) return <div>Loading...</div>

  return (
    <div className="max-w-2xl p-6 mx-auto">
      <h2 className="mb-4 text-xl font-bold">My profile</h2>
      <div className="mb-6">
        <div><b>Name :</b> {profile.name}</div>
        <div><b>Email :</b> {profile.email}</div>
      </div>
      <h3 className="mb-2 font-bold">My bookings</h3>
      <ul>
        {bookings.map(b => (
          <li key={b.id} className="py-2 border-b">
            {b.activities?.name} on {b.date} — {b.payment_status}
          </li>
        ))}
      </ul>
      <button className="px-4 py-2 mt-6 text-white bg-red-500 rounded" onClick={() => { removeToken(); window.location.reload() }}>Logout</button>
    </div>
  )
}
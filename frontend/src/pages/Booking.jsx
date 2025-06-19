import { useState, useEffect } from 'react'
import { getActivities, createBooking } from '../lib/api'
import { getToken } from '../lib/auth'
import Navbar from "../components/Navbar.jsx"
import ActivityCard from "../components/ActivityCard.jsx"
import Footer from "../components/Footer.jsx"

export default function Booking() {
  const [activities, setActivities] = useState([])
  const [activityId, setActivityId] = useState('')
  const [date, setDate] = useState('')
  const [payment, setPayment] = useState('on_site')
  const [message, setMessage] = useState('')

  useEffect(() => {
    getActivities().then(res => setActivities(res.data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = getToken()
      const res = await createBooking({ activity_id: activityId, date, payment_method: payment }, token)
      if (res.data.stripe_session_url) {
        window.location.href = res.data.stripe_session_url
      } else {
        setMessage('Réservation enregistrée !')
      }
    } catch (err) {
      setMessage(err.response?.data?.error || 'Erreur')
    }
  }

  return (
    <form className="max-w-md mx-auto p-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Réserver une activité</h2>
      <select className="border p-2 mb-2 w-full" value={activityId} onChange={e => setActivityId(e.target.value)} required>
        <option value="">-- Choisir une activité --</option>
        {activities.map(a => (
          <option key={a.id} value={a.id}>{a.nom}</option>
        ))}
      </select>
      <input type="date" className="border p-2 mb-2 w-full" value={date} onChange={e => setDate(e.target.value)} required />
      <select className="border p-2 mb-2 w-full" value={payment} onChange={e => setPayment(e.target.value)}>
        <option value="on_site">Payer sur place</option>
        <option value="stripe">Payer en ligne (CB)</option>
      </select>
      <button className="bg-blue-600 text-white p-2 w-full" type="submit">Réserver</button>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </form>
  )
}

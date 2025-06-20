import { useState, useEffect } from 'react'
import { getActivities, createBooking } from '../lib/api'
import { getToken } from '../lib/auth'
import Navbar from "../components/Navbar.jsx"
import ActivityCard from "../components/ActivityCard.jsx"
import Footer from "../components/Footer.jsx"

const creneaux = [
  "09:00 - 10:00",
  "10:30 - 11:30",
  "12:00 - 13:00",
  "14:00 - 15:00",
  "16:00 - 17:00"
];

export default function Booking() {
  const [activities, setActivities] = useState([])
  const [activityId, setActivityId] = useState('')
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')
  const [payment, setPayment] = useState('on_site')
  const [message, setMessage] = useState('')

  useEffect(() => {
    getActivities().then(res => setActivities(res.data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = getToken()
      const res = await createBooking({ activity_id: activityId, date, slot, payment_method: payment }, token)
      if (res.data.stripe_session_url) {
        window.location.href = res.data.stripe_session_url
      } else {
        setMessage('Booking saved!')
      }
    } catch (err) {
      setMessage(err.response?.data?.error || 'Error')
    }
  }

  return (
    <form className="max-w-md p-6 mx-auto" onSubmit={handleSubmit}>
      <h2 className="mb-4 text-xl font-bold">Book an activity</h2>
      <select className="w-full p-2 mb-2 border" value={activityId} onChange={e => setActivityId(e.target.value)} required>
        <option value="">-- Choose an activity --</option>
        {activities.map(a => (
          <option key={a.id} value={a.id}>{a.name}</option>
        ))}
      </select>
      <input type="date" className="w-full p-2 mb-2 border" value={date} onChange={e => setDate(e.target.value)} required />
      <select className="w-full p-2 mb-2 border" value={slot} onChange={e => setSlot(e.target.value)} required>
        <option value="">-- Choose a time slot --</option>
        {creneaux.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select className="w-full p-2 mb-2 border" value={payment} onChange={e => setPayment(e.target.value)}>
        <option value="on_site">Pay on site</option>
        <option value="stripe">Pay online (Card)</option>
      </select>
      <button className="w-full p-2 text-white bg-blue-600" type="submit">Book</button>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </form>
  )
}

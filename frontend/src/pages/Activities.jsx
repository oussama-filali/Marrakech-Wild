import { useEffect, useState } from 'react'
import { getActivities } from '../lib/api'
import Navbar from '../components/Navbar.jsx'
import ActivityCard from '../components/ActivityCard.jsx'
import Footer from '../components/Footer.jsx'

export default function Activities() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    getActivities().then(res => setActivities(res.data))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {activities.map(a => <ActivityCard key={a.id} activity={a} />)}
    </div>
  )
}
import { useEffect, useState } from 'react'
import { getActivities } from '../lib/api'
import ActivityCard from '../components/ActivityCard'

export default function Activities() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    getActivities().then(res => setActivities(res.data))
  }, [])

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-yellow-100 via-blue-100 to-teal-100 py-12">
      <h2 className="mb-10 text-3xl font-extrabold text-center text-blue-700">Nos activités</h2>
      <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {activities.map(a => (
          <ActivityCard key={a.id} activity={a} />
        ))}
      </div>
    </div>
  )
}
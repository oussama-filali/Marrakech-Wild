import { useEffect, useState } from 'react'
import { getActivities } from '../lib/api'

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
          <div key={a.id} className="flex flex-col items-center p-6 transition-transform duration-300 bg-white shadow-xl rounded-3xl hover:scale-105">
            <img src={a.image_url} alt={a.nom} className="object-cover w-full h-48 mb-4 shadow rounded-2xl" />
            <h3 className="mb-2 text-xl font-bold text-blue-700">{a.nom}</h3>
            <p className="mb-4 text-gray-600">{a.description}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-blue-700">{a.prix} €</span>
              <span className="text-xs text-gray-500">({a.prix * 11} MAD)</span>
            </div>
            <button className="px-6 py-2 font-bold text-white transition-transform duration-300 rounded-full shadow bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-300 hover:scale-105">
              Réserver
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
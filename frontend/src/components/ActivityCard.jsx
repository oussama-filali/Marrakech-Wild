export default function ActivityCard({ activity, onBook }) {
  const taux = 11; // 1€ ≈ 11 MAD
  return (
    <div className="border rounded shadow p-4 flex flex-col bg-white bg-opacity-80 hover:bg-opacity-100 transition">
      <img src={activity.image_url} alt={activity.nom} className="h-40 object-cover mb-2 rounded" />
      <h3 className="font-bold text-lg text-blue-700">{activity.nom}</h3>
      <p>{activity.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-blue-700">
          {activity.prix} € <span className="text-xs text-gray-500">({activity.prix * taux} MAD)</span>
        </span>
        {onBook && <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => onBook(activity)}>Réserver</button>}
      </div>
    </div>
  )
}
export default function ActivityCard({ activity, onBook }) {
  return (
    <div className="flex flex-col p-4 transition bg-white border rounded shadow bg-opacity-80 hover:bg-opacity-100">
      <img src={activity.image_url} alt={activity.name} className="object-cover h-40 mb-2 rounded" />
      <h3 className="text-lg font-bold text-blue-700">{activity.name}</h3>
      <p>{activity.description}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-bold text-blue-700">
          {activity.price_eur} € <span className="text-xs text-gray-500">({activity.price_mad} MAD)</span>
        </span>
        {onBook && <button className="px-3 py-1 text-white bg-blue-600 rounded" onClick={() => onBook(activity)}>Book</button>}
      </div>
    </div>
  )
}
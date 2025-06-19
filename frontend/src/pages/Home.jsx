import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-yellow-100 via-blue-100 to-teal-100 animate-fade-in">
      <div className="text-center mt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-lg mb-4 animate-fade-in-down">
          Aventures à Marrakech
        </h1>
        <p className="text-xl md:text-2xl text-teal-700 mb-8 font-semibold animate-fade-in-up">
          Quad, Cheval, Buggy : réservez votre expérience unique !
        </p>
        <Link
          to="/activities"
          className="bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-300 text-white px-8 py-4 rounded-full shadow-lg text-xl font-bold hover:scale-105 transition-transform duration-300 animate-bounce"
        >
          Voir les activités
        </Link>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in-up">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Quad" className="rounded-3xl shadow-xl w-64 h-40 object-cover hover:scale-105 transition-transform duration-300" />
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Cheval" className="rounded-3xl shadow-xl w-64 h-40 object-cover hover:scale-105 transition-transform duration-300" />
        <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" alt="Buggy" className="rounded-3xl shadow-xl w-64 h-40 object-cover hover:scale-105 transition-transform duration-300" />
      </div>
    </main>
  );
}
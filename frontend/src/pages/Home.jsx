import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simule l'ouverture du rideau après 2s
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-[90vh] flex flex-col justify-center items-center bg-black overflow-hidden">
      {/* Vidéo immersive */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 object-cover w-full h-full"
        poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-desert-landscape-in-morocco-1175-large.mp4" type="video/mp4" />
        <source src="https://assets.mixkit.co/videos/preview/mixkit-horse-riding-on-the-beach-1187-large.mp4" type="video/mp4" />
        {/* Ajoute d'autres vidéos si tu veux */}
      </video>

      {/* Rideau animé */}
      {!showContent && (
        <>
          <div className="absolute top-0 left-0 z-20 w-1/2 h-full bg-gradient-to-r from-yellow-300 via-orange-400 to-transparent animate-rideau-left"></div>
          <div className="absolute top-0 right-0 z-20 w-1/2 h-full bg-gradient-to-l from-yellow-300 via-orange-400 to-transparent animate-rideau-right"></div>
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
            <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl drop-shadow-lg animate-fade-in-down">
              Marrakech Wild
            </h1>
            <p className="text-2xl font-semibold text-white animate-fade-in-up">
              Préparez-vous à l’aventure...
            </p>
          </div>
        </>
      )}

      {/* Contenu principal après ouverture du rideau */}
      {showContent && (
        <div className="relative z-10 flex flex-col items-center w-full animate-fade-in">
          <div className="mt-24 text-center">
            <h1 className="mb-4 text-5xl font-extrabold text-white md:text-6xl drop-shadow-lg animate-fade-in-down">
              Aventures à Marrakech
            </h1>
            <p className="mb-8 text-xl font-semibold text-yellow-200 md:text-2xl animate-fade-in-up">
              Quad, Cheval, Buggy : réservez votre expérience unique !
            </p>
          </div>
          {/* Activités phares */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in-up">
            {/* Cheval */}
            <div className="flex flex-col items-center p-4 transition shadow-xl bg-white/80 rounded-3xl w-72 hover:scale-105">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Balade à cheval" className="object-cover w-full h-40 mb-2 rounded-2xl" />
              <h3 className="text-lg font-bold text-blue-700">Balade à cheval</h3>
              <p className="mb-2 text-center text-gray-700">Explorez les paysages de Marrakech à dos de cheval, pour tous niveaux.</p>
              <Link to="/booking" className="px-6 py-2 mt-2 font-bold text-white transition-transform duration-300 rounded-full shadow bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-300 hover:scale-105">
                Réserver
              </Link>
            </div>
            {/* Quad */}
            <div className="flex flex-col items-center p-4 transition shadow-xl bg-white/80 rounded-3xl w-72 hover:scale-105">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Session Quad" className="object-cover w-full h-40 mb-2 rounded-2xl" />
              <h3 className="text-lg font-bold text-blue-700">Session Quad</h3>
              <p className="mb-2 text-center text-gray-700">Sensations fortes garanties dans les dunes et palmeraies de Marrakech.</p>
              <Link to="/booking" className="px-6 py-2 mt-2 font-bold text-white transition-transform duration-300 rounded-full shadow bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-300 hover:scale-105">
                Réserver
              </Link>
            </div>
            {/* Buggy */}
            <div className="flex flex-col items-center p-4 transition shadow-xl bg-white/80 rounded-3xl w-72 hover:scale-105">
              <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" alt="Session Buggy" className="object-cover w-full h-40 mb-2 rounded-2xl" />
              <h3 className="text-lg font-bold text-blue-700">Session Buggy</h3>
              <p className="mb-2 text-center text-gray-700">Partez à l’aventure en buggy à travers les paysages marocains.</p>
              <Link to="/booking" className="px-6 py-2 mt-2 font-bold text-white transition-transform duration-300 rounded-full shadow bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-300 hover:scale-105">
                Réserver
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>
    </main>
  );
}
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ user, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-300 shadow-lg sticky top-0 z-50 animate-fade-in-down">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/" className="text-2xl font-extrabold text-white drop-shadow-lg tracking-widest hover:scale-105 transition-transform duration-300">
          Marrakech Wild
        </Link>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg width="32" height="32" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h24M4 16h24M4 24h24"/></svg>
        </button>
        <div className={`flex-col md:flex-row md:flex gap-6 items-center font-semibold text-white text-lg ${open ? "flex" : "hidden"} md:flex bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-300 md:bg-none absolute md:static top-16 left-0 w-full md:w-auto p-4 md:p-0 shadow-lg md:shadow-none`}>
          <Link to="/" className="hover:underline">Accueil</Link>
          <Link to="/activities" className="hover:underline">Activités</Link>
          <Link to="/booking" className="hover:underline">Réservation</Link>
          {user ? (
            <>
              <Link to="/profile" className="hover:underline">Profil</Link>
              <button onClick={onLogout} className="hover:underline">Déconnexion</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Connexion</Link>
              <Link to="/register" className="hover:underline">Inscription</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
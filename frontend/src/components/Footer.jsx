import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-300 via-teal-400 to-blue-500 text-white py-8 mt-16 animate-fade-in-up">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <div>
          <div className="font-extrabold text-xl mb-2">Marrakech Wild</div>
          <div className="text-sm">Aventures et expériences uniques à Marrakech</div>
        </div>
        <div className="text-sm">
          <div>Contact</div>
          <div>Email: <a href="mailto:contact@marrakech-wild.com" className="underline">contact@marrakech-wild.com</a></div>
          <div>Téléphone: <a href="tel:+212600000000" className="underline">+212 600 000 000</a></div>
        </div>
        <div className="text-xs mt-2 md:mt-0">&copy; {new Date().getFullYear()} Marrakech Wild. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
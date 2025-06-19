import { useState } from 'react'
import { register } from '../lib/api'
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar.jsx"
import ActivityCard from "../components/ActivityCard.jsx"
import Footer from "../components/Footer.jsx"

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register({ name, email, password })
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.error || 'Erreur')
    }
  }

  return (
    <form className="max-w-md mx-auto p-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Inscription</h2>
      <input className="border p-2 mb-2 w-full" placeholder="Nom" value={name} onChange={e => setName(e.target.value)} required />
      <input className="border p-2 mb-2 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input className="border p-2 mb-2 w-full" placeholder="Mot de passe" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button className="bg-blue-600 text-white p-2 w-full" type="submit">S'inscrire</button>
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
    </form>
  )
}
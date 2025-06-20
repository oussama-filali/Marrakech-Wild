const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// Autorise TOUTES les origines et tous les headers
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json())

// Import des routes
const authRouter = require('./routes/auth')
const bookingsRouter = require('./routes/bookings')
const activitiesRouter = require('./routes/activities')

// Utilisation des routes
app.use('/auth', authRouter)
app.use('/bookings', bookingsRouter)
app.use('/activities', activitiesRouter)

// Test de connexion à Supabase (optionnel)
const supabase = require('./services/supabase')
app.get('/test-supabase', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*').limit(1)
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

// Démarrage du serveur
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})

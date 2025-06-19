const express = require('express')
const cors = require('cors')
require('dotenv').config()
const activitiesRoutes = require('./routes/activities')
const bookingsRoutes = require('./routes/bookings')
const authRoutes = require('./routes/auth')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/activities', activitiesRoutes)
app.use('/bookings', bookingsRoutes)
app.use('/auth', authRoutes)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Erreur serveur' })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`))

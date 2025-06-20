const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// Routes
const bookings = require('./routes/bookings')
app.use('/routes/bookings', bookings)
const activities = require('./routes/activities')
app.use('/routes/activities', activities)
const stripeRoutes = require('./routes/stripe')
app.use('/services/stripe', stripeRoutes)
// Démarrage
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`✅ Backend running on http://localhost:${port}`)
})

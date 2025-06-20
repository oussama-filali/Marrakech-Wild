const express = require('express')
const router = express.Router()
const supabase = require('../services/supabase')
const bookingController = require('../controllers/bookingController')
const authMiddleware = require('../middleware/authMiddleware')

// Récupérer toutes les réservations (admin) avec filtres
router.get('/', async (req, res) => {
  const { activity_id, date } = req.query

  let query = supabase
    .from('bookings')
    .select(`
      id,
      full_name,
      email,
      activity_id,
      date,
      slot,
      nb_people,
      total_price_eur,
      total_price_mad,
      status,
      stripe_checkout_id,
      activities ( name )
    `)
    .order('date', { ascending: false })

  if (activity_id) {
    query = query.eq('activity_id', activity_id)
  }

  if (date) {
    query = query.eq('date', date)
  }

  const { data, error } = await query

  if (error) return res.status(500).json({ error: error.message })

  res.json(data)
})

// Créer une réservation (utilisateur connecté)
router.post('/', authMiddleware, bookingController.createBooking)

// Récupérer les réservations de l'utilisateur connecté
router.get('/me', authMiddleware, bookingController.getUserBookings)

module.exports = router

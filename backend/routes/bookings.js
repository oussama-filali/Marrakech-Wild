const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/bookingController')
const authMiddleware = require('../middleware/authMiddleware')

// Créer une réservation (auth obligatoire)
router.post('/', authMiddleware, bookingController.createBooking)

// Voir ses réservations (auth obligatoire)
router.get('/me', authMiddleware, bookingController.getUserBookings)

module.exports = router

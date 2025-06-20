const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

// Inscription
router.post('/register', authController.register)
// Connexion
router.post('/login', authController.login)
// Profil utilisateur connecté
router.get('/me', authMiddleware, authController.getProfile)

module.exports = router
const express = require('express')
const router = express.Router()
const activityController = require('../controllers/activityController')

// Liste des activités
router.get('/', activityController.getAllActivities)

module.exports = router

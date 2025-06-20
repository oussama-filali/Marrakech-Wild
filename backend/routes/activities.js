const express = require('express')
const router = express.Router()
const supabase = require('../services/supabase')

// GET toutes les activités
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .order('id', { ascending: true })

  if (error) return res.status(500).json({ error: error.message })

  res.json(data)
})

// POST nouvelle activité
router.post('/', async (req, res) => {
  const {
    name, description, duration,
    price_eur, price_mad, image_url
  } = req.body

  if (!name || !price_eur || !price_mad) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const { error } = await supabase.from('activities').insert({
    name, description, duration,
    price_eur, price_mad, image_url
  })

  if (error) return res.status(500).json({ error: error.message })

  res.json({ success: true })
})

module.exports = router

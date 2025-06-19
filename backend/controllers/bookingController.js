const supabase = require('../supabase')
const stripeService = require('../services/stripeService')

exports.createBooking = async (req, res) => {
  const { activity_id, date, payment_method } = req.body
  const user_id = req.user.id

  if (!activity_id || !date || !payment_method) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }

  // Paiement Stripe si demandé
  let payment_status = 'pending'
  let stripe_session_url = null

  if (payment_method === 'stripe') {
    const { url, error } = await stripeService.createCheckoutSession(activity_id, user_id)
    if (error) return res.status(500).json({ error })
    payment_status = 'waiting_payment'
    stripe_session_url = url
  } else if (payment_method === 'on_site') {
    payment_status = 'to_pay_on_site'
  }

  const { data, error } = await supabase
    .from('bookings')
    .insert([{ user_id, activity_id, date, payment_status }])
    .select()
    .single()

  if (error) return res.status(500).json({ error: error.message })

  res.status(201).json({
    booking: data,
    stripe_session_url
  })
}

exports.getUserBookings = async (req, res) => {
  const user_id = req.user.id
  const { data, error } = await supabase
    .from('bookings')
    .select('*, activities(*)')
    .eq('user_id', user_id)
    .order('date', { ascending: false })

  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}
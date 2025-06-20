const Stripe = require('stripe')
const supabase = require('./supabase')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

exports.createCheckoutSession = async (activity_id, user_id) => {
  // Récupère l'activité
  const { data: activity, error } = await supabase.from('activities').select('*').eq('id', activity_id).single()
  if (error || !activity) return { error: 'Activité non trouvée' }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: activity.name,
          },
          unit_amount: activity.price * 100,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: process.env.FRONTEND_URL + '/success',
      cancel_url: process.env.FRONTEND_URL + '/cancel',
      metadata: {
        user_id,
        activity_id
      }
    })
    return { url: session.url }
  } catch (err) {
    return { error: err.message }
  }
}
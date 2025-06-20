const supabase = require('./supabase')
const jwt = require('jsonwebtoken')

exports.register = async (email, password, name) => {
  // Vérifie si l'utilisateur existe déjà
  const { data: existing } = await supabase.from('users').select('*').eq('email', email).single()
  if (existing) return { error: 'Email déjà utilisé' }

  // Crée l'utilisateur
  const { data, error } = await supabase
    .from('users')
    .insert([{ email, password, name }])
    .select()
    .single()
  if (error) return { error: error.message }

  return { user: data }
}

exports.login = async (email, password) => {
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .single()
  if (error || !user) return { error: 'Email ou mot de passe incorrect' }

  // Génère un token JWT
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
  return { token }
}
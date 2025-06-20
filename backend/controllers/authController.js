const supabase = require('../services/supabase')
const authService = require('../services/authService')

exports.register = async (req, res) => {
  const { email, password, name } = req.body
  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  const { user, error } = await authService.register(email, password, name)
  if (error) return res.status(400).json({ error })
  res.status(201).json({ user })
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  const { token, error } = await authService.login(email, password)
  if (error) return res.status(401).json({ error })
  res.json({ token })
}

exports.getProfile = async (req, res) => {
  const user_id = req.user.id
  const { data, error } = await supabase.from('users').select('*').eq('id', user_id).single()
  if (error) return res.status(404).json({ error: 'User not found' })
  res.json(data)
}
const supabase = require('../supabase')

exports.getAllActivities = async (req, res) => {
  const { data, error } = await supabase.from('activities').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
}
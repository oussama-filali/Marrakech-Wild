module.exports = function validateBooking(body) {
  const requiredFields = [
    'full_name',
    'email',
    'activity_id',
    'date',
    'slot',
    'nb_people'
  ]

  for (const field of requiredFields) {
    if (!body[field]) return `${field} is missing`
  }

  return null
}

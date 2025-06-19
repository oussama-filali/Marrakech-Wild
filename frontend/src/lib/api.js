import axios from 'axios'

const API_URL = 'http://localhost:3001'

export const getActivities = () => axios.get(`${API_URL}/activities`)
export const register = (data) => axios.post(`${API_URL}/auth/register`, data)
export const login = (data) => axios.post(`${API_URL}/auth/login`, data)
export const getProfile = (token) =>
  axios.get(`${API_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
export const createBooking = (data, token) =>
  axios.post(`${API_URL}/bookings`, data, { headers: { Authorization: `Bearer ${token}` } })
export const getMyBookings = (token) =>
  axios.get(`${API_URL}/bookings/me`, { headers: { Authorization: `Bearer ${token}` } })
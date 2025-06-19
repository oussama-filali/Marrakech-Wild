import { useState } from 'react'
import { getToken, removeToken } from '../lib/auth'
import { getProfile } from '../lib/api'

export function useUser() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchProfile = async () => {
    setLoading(true)
    const token = getToken()
    if (!token) {
      setUser(null)
      setLoading(false)
      return
    }
    try {
      const res = await getProfile(token)
      setUser(res.data)
    } catch {
      setUser(null)
      removeToken()
    }
    setLoading(false)
  }

  return { user, setUser, fetchProfile, loading }
}
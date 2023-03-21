import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [ data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data

      localStorage.setItem('@popcorn_polls:token', token)
      localStorage.setItem('@popcorn_polls:user', JSON.stringify(user))

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token, user})

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível realizar o Login!')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@popcorn_polls:token')
    localStorage.removeItem('@popcorn_polls:user')

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('@popcorn_polls:token')
    const user = localStorage.getItem('@popcorn_polls:user')

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  },[])

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      user: data.user 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
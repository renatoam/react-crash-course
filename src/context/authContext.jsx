import { createContext, useContext, useState } from "react";
import { authenticateService, signUpService, signInService } from "../services/users";

export const AuthContext = createContext(null)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  async function authenticate(email) {
    const response = await authenticateService(email)

    if (response?.error) {
      throw Error(response.message)
    }
  }

  async function signUp(user) {
    const response = await signUpService(user)

    if (response?.error) {
      throw Error(response.message)
    }

    setUser(response)
  }

  async function signIn(email, password) {
    const response = await signInService(email, password)

    if (response?.error) {
      throw Error(response.message)
    }

    setUser(response)
  }

  const value = {
    signUp,
    authenticate,
    signIn,
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

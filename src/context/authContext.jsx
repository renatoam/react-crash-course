import { createContext, useContext, useState } from "react";
import { authenticateService, createUserService } from "../services/users";

export const AuthContext = createContext(null)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  async function authenticate(email) {
    return authenticateService(email)
  }

  async function createUser(user) {
    const response = await createUserService(user)

    setUser(response)
  }

  const value = {
    createUser,
    authenticate,
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

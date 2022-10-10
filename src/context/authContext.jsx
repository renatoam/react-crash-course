import { createContext, useState } from "react";
import { createUserService } from "../services/users";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  async function createUser(user) {
    const response = await createUserService(user)

    setUser(response)
  }

  return (
    <AuthContext.Provider value={{ createUser, user }}>
      {children}
    </AuthContext.Provider>
  )
}

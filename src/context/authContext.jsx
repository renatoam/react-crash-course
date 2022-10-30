import { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { authenticateService, signInService, signUpService } from "../services/auth";
import { setNotifications } from "../store/notificationsSlice";
import { setUser } from "../store/userSlice";

export const AuthContext = createContext(null)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()

  async function authenticate(email) {
    const response = await authenticateService(email)

    if (response?.error) {
      dispatch(setNotifications({
        status: 'error',
        message: response.message
      }))

      return false
    }

    dispatch(setNotifications({
      status: 'success',
      message:  'Usuário autenticado. Continue com o login.'
    }))
    
    return true
  }

  async function signUp(user) {
    const response = await signUpService(user)

    if (response?.error) {
      dispatch(setNotifications({
        status: 'error',
        message: response.message
      }))

      return false
    }

    dispatch(setUser(response.user))
    dispatch(setNotifications({
      status: 'success',
      message:  `Bem-vindo, ${response.firstname ?? 'camarada'}`
    }))
    
    return true
  }

  async function signIn(email, password) {
    const response = await signInService(email, password)

    if (response?.error) {
      dispatch(setNotifications({
        status: 'error',
        message: response.message
      }))

      return false
    }

    dispatch(setUser(response))
    dispatch(setNotifications({
      status: 'success',
      message:  `Olá de novo, ${response.firstname ?? 'estudante'}!`
    }))

    return true
  }

  const value = {
    signUp,
    authenticate,
    signIn
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

import { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { authenticateService, refreshTokenService, signInService, signUpService } from "../services/auth";
import { setNotifications } from "../store/notificationsSlice";
import { setToken, setUser } from "../store/userSlice";

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

    dispatch(setUser(response.user))
    dispatch(setNotifications({
      status: 'success',
      message:  `Olá, ${response.user.firstname}. Por favor, digite sua senha.`
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

    dispatch(setUser({ ...response.user, isLogged: true }))
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

    dispatch(setUser({ ...response.user, isLogged: true }))
    dispatch(setNotifications({
      status: 'success',
      message:  `Olá de novo, ${response.user.firstname ?? 'estudante'}!`
    }))

    return true
  }

  async function refresh() {
    const response = await refreshTokenService()

    if (response?.error) {
      dispatch(setNotifications({
        status: 'error',
        message: 'Você não está mais logado. Faça o login novamente.'
      }))

      return false
    }

    dispatch(setToken(response.accessToken))
  }

  const value = {
    signUp,
    signIn,
    refresh,
    authenticate,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

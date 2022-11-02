import { useCallback, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext"
import { useFormContext } from "../context/formContext"
import { useNotificationContext } from "../context/notificationContext"
import { setUser } from "../store/userSlice"
import useValidation from "./useValidation"

const useAuthenticate = () => {
  const { loading, setLoading, setFormError } = useFormContext()
  const { authenticate } = useAuthContext()
  const { notify } = useNotificationContext()
  const dispatch = useDispatch()
  const { emailValidation } = useValidation()
  const user = useSelector(state => state.user)

  const email = useRef(null)
  const form = useRef(null)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleClearForm = () => {
    email.current.focus()
    setFormError(false)
    setLoading(false)
  }

  const handleValidation = useCallback((_, value) => {
    try {
      emailValidation.parse(value)
      return true
    } catch (error) {
      return {
        error: true,
        issues: error.issues ?? [],
        message: error.errors?.[0].message
      }
    }
  }, [])
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)

    const response = await authenticate(email.current.value)

    if (response) {
      dispatch(setUser({ email: email.current.value }))
      setLoading(false)
      
      return navigate('/auth/signin', { replace: true })      
    }

    form.current.reset()
    setFormError(true)
    setLoading(false)
  }

  useEffect(() => {
    email.current.focus()
  }, [])

  useEffect(() => {
    if (user?.isLogged) {
      notify('info', 'Você já está logado')
      return navigate(from, { replace: true })
    }
  }, [user, from, navigate])

  return {
    form,
    email,
    loading,
    handleClearForm,
    handleSubmit,
    handleValidation
  }
}

export default useAuthenticate

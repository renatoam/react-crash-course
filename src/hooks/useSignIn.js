import { useCallback, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext"
import { useFormContext } from "../context/formContext"
import useValidation from "./useValidation"

const useSignIn = () => {
  const { signIn } = useAuthContext()
  const { loading, setLoading, setFormError } = useFormContext()
  const [inputEmailState, setInputEmailState] = useState('')
  const { emailValidation } = useValidation()
  const user = useSelector(state => state.user)

  const password = useRef(null)
  const email = useRef(null)
  const form = useRef(null)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  
  const handleClearForm = () => {
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
    
    const response = await signIn(email.current.value, password.current.value)
    
    if (!response) {
      form.current.reset()
      setFormError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user?.isLogged) {
      return navigate(from, { replace: true })
    }

    if (user?.email) {
      setInputEmailState(user.email)
      password.current.focus()
    }
  }, [user, from, navigate])

  return {
    refs: {
      password,
      email,
      form
    },
    loading,
    inputEmailState,
    handleClearForm,
    handleSubmit,
    handleValidation
  }
}

export default useSignIn

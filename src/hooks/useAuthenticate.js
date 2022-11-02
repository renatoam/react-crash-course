import { useCallback, useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext"
import { useFormContext } from "../context/formContext"
import { setUser } from "../store/userSlice"
import useValidation from "./useValidation"

const useAuthenticate = () => {
  const { loading, setLoading, setFormError } = useFormContext()
  const { authenticate } = useAuthContext()
  const dispatch = useDispatch()
  const { emailValidation } = useValidation()

  const email = useRef(null)
  const form = useRef(null)

  const navigate = useNavigate()

  useEffect(() => {
    email.current.focus()
  }, [])

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

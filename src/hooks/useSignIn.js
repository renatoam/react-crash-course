import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext"
import { useFormContext } from "../context/formContext"

const useSignIn = () => {
  const { signIn } = useAuthContext()
  const { loading, setLoading, setFormError } = useFormContext()
  const [inputEmailState, setInputEmailState] = useState('')

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
  
  useEffect(() => {
    if (user.email) {
      setInputEmailState(user.email)
      password.current.focus()
    }
  }, [user.email])

  useEffect(() => {
    if (user.isLogged) {
      return navigate(from, { replace: true })
    }
  }, [user, from, navigate])
  
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

  return {
    refs: {
      password,
      email,
      form
    },
    loading,
    inputEmailState,
    handleClearForm,
    handleSubmit
  }
}

export default useSignIn

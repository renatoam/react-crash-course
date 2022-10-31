import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext"
import { useFormContext } from "../context/formContext"
import { setUser } from "../store/userSlice"

const useAuthenticate = () => {
  const { loading, setLoading, setFormError } = useFormContext()
  const { authenticate } = useAuthContext()
  const dispatch = useDispatch()

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
    handleSubmit
  }
}

export default useAuthenticate

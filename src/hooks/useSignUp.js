import { useCallback, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext"
import { useFormContext } from "../context/formContext"
import { useNotificationContext } from "../context/notificationContext"
import useValidation from "./useValidation"

const useSignUp = () => {
  const { signUp } = useAuthContext()
  const { notify } = useNotificationContext()
  const { loading, setLoading, setFormError } = useFormContext()

  const firstnameRef = useRef(null)
  const passwordRef = useRef(null)
  const form = useRef(null)

  const userState = useSelector(state => state.user)
  const navigate = useNavigate()

  const [registrationInitialized, setRegistrationInitialized] = useState(false)
  const { defaultSchema, matchPasswordSchema } = useValidation()

  const handleClearForm = useCallback(() => {
    setFormError(false)
    setLoading(false)
    form.current.reset()
  }, [])
  
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault()

    if (!registrationInitialized) {
      return notify('info', 'Please, fill the form.')
    }
    const fields = [...event.target.elements]
      .filter(field => field.localName === 'input')
    const emptyField = fields.find(field => field.value.length <= 0)

    if (emptyField) {
      return notify('warning', validation[emptyField.name].message)
    }

    setLoading(true)
    
    delete user.confirmPassword
    const response = await signUp(user)

    if (!response) {
      setFormError(true)
      setLoading(false)
    }
  }, [])

  const handleValidation = useCallback((field, value) => {
    try {
      if (field === 'confirmPassword') {      
        matchPasswordSchema.parse({
          password: passwordRef.current.value,
          confirmPassword: value
        })

        return true
      }

      defaultSchema[field].parse(value)
      return true
    } catch (error) {
      return {
        error: true,
        issues: error.issues ?? [],
        message: error.errors?.[0].message
      }
    }
  }, [])

  useEffect(() => {
    firstnameRef.current.focus()
    setRegistrationInitialized(false)
  }, [])

  useEffect(() => {
    if (userState) {
      return navigate('/content', { replace: true })
    }
  }, [userState, navigate])

  return {
    refs: {
      firstnameRef,
      passwordRef,
      form
    },
    loading,
    handleClearForm,
    handleSubmit,
    handleValidation
  }
}

export default useSignUp

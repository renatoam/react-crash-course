import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext"
import { useFormContext } from "../context/formContext"
import { useNotificationContext } from "../context/notificationContext"

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
const initialUserState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const useSignUp = () => {
  const { loading, setLoading, setFormError } = useFormContext()
  const { signUp } = useAuthContext()
  const { notify } = useNotificationContext()

  const firstnameRef = useRef(null)
  const form = useRef(null)

  const userState = useSelector(state => state.user)
  const navigate = useNavigate()

  const [user, setUser] = useState(initialUserState)
  const [registrationInitialized, setRegistrationInitialized] = useState(false)
  const [matchPassword, setMatchPassword] = useState({ value: '', match: false })

  const isConfirmPasswordActive = user.confirmPassword?.length > 0

  const validation = {
    firstname: {
      error: user.firstname?.length > 0 && user.firstname?.length < 3,
      message: 'First name should have at least 3 characters.'
    },
    lastname: {
      error: user.lastname?.length > 0 && user.lastname?.length < 2,
      message: 'Last name should have at least 1 character.'
    },
    email: {
      error: user.email?.length > 0 && !EMAIL_REGEX.test(user.email),
      message: 'Email should have a valid format.'
    },
    password: {
      error: user.password?.length > 0 && user.password?.length < 8,
      message: 'Password should have at least 8 characters.'
    },
    confirmPassword: {
      error: isConfirmPasswordActive && user.password === user.confirmPassword,
      message: 'Passwords should match.'
    },
  }

  useEffect(() => {
    firstnameRef.current.focus()
    setRegistrationInitialized(false)
  }, [])

  useEffect(() => {
    if (userState) {
      return navigate('/content', { replace: true })
    }
  }, [userState, navigate])

  const handleClearForm = () => {
    setFormError(false)
    setLoading(false)
    form.current.reset()
  }
  
  const handleSubmit = async (event) => {
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
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    if (!registrationInitialized) {
      setRegistrationInitialized(true)
    }

    if (name === 'confirmPassword') {
      setMatchPassword(() => {
        return {
          value: value,
          match: value === user.password
        }
      })
    }

    setUser(currentUser => {
      return {
        ...currentUser,
        [name]: value
      }
    })
  }

  return {
    refs: {
      firstnameRef,
      form
    },
    loading,
    matchPassword,
    validation,
    isConfirmPasswordActive,
    handleClearForm,
    handleChange,
    handleSubmit
  }
}

export default useSignUp

import { useEffect, useRef, useState } from "react"
import { Delete } from "@icon-park/react"
import { useNavigate } from "react-router-dom"
import { Button, Text } from "../../components"
import Form from "../../components/form/Form"
import GroupButton from "../../components/groupButton/GroupButton"
import Input from "../../components/input/Input"
import { useAuthContext } from "../../context/authContext"
import { useFormContext } from "../../context/formContext"
import { useNotificationContext } from "../../context/notificationContext"
import Info from "../auth/info/Info"
import './SignUp.scss'

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
const initialUserState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
}
 
export default function SignUp() {
  const { loading, setLoading, setFormError } = useFormContext()
  const { signUp } = useAuthContext()
  const { notify } = useNotificationContext()

  const firstnameRef = useRef(null)
  const form = useRef(null)

  const navigate = useNavigate()
  const [user, setUser] = useState(initialUserState)
  const [registrationInitialized, setRegistrationInitialized] = useState(false)

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
      error: user.confirmPassword?.length > 0 && user.password === user.confirmPassword,
      message: 'Passwords should match.'
    },
  }

  useEffect(() => {
    firstnameRef.current.focus()
    setRegistrationInitialized(false)
  }, [])

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
    
    try {
      delete user.confirmPassword
      await signUp(user)
      notify('success', 'Welcome!')
      return navigate('/cards')
    } catch (error) {
      notify('error', error.message)
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

    setUser(currentUser => {
      return {
        ...currentUser,
        [name]: value
      }
    })
  }

  return (
    <section className="sign">
      <Info />
      <Form onSubmit={handleSubmit} ref={form}>
        <Input
          placeholder="First Name"
          name="firstname"
          onChange={handleChange}
          ref={firstnameRef}
          error={validation.firstname.error}
          errorMessage={validation.firstname.message}
        />
        <Input
          placeholder="Last Name"
          name="lastname"
          onChange={handleChange}
          error={validation.lastname.error}
          errorMessage={validation.lastname.message}
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleChange}
          error={validation.email.error}
          errorMessage={validation.email.message}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
          error={validation.password.error}
          errorMessage={validation.password.message}
        />
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          error={validation.confirmPassword.error}
          errorMessage={validation.confirmPassword.message}
        />
        <GroupButton>
          <Button
            className="continue"
            type="submit"
            loading={loading}
          >
            Sign Up
          </Button>
          <Button
            className="continue helper"
            helper
            loading={loading}
            onClick={handleClearForm}
          >
              <Delete />
          </Button>
        </GroupButton>
        <Text element="p">By clicking the button, you are agreeing to our <span>Terms and Services</span></Text>
      </Form>
    </section>
  )
}

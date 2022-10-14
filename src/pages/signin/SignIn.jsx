import { useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../../components"
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import { useAuthContext } from "../../context/authContext"
import { useFormContext } from "../../context/formContext"
import { useNotificationContext } from "../../context/notificationContext"
import './SignIn.scss'
 
export default function SignIn() {
  const { loading, setLoading, setFormError } = useFormContext()
  const { signIn, user } = useAuthContext()
  const { notify } = useNotificationContext()

  const password = useRef(null)
  const email = useRef(null)
  const form = useRef(null)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    email.current.focus()
  }, [])

  const handleClearForm = () => {
    setFormError(false)
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      return navigate(from, { replace: true })
    }
  }, [user, from, navigate])
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    
    try {
      await signIn(email.current.value, password.current.value)
      return notify('success', 'Welcome back!')
    } catch (error) {
      notify('error', error.message)
      form.current.reset()
      setFormError(true)
      setLoading(false)
    }    
  }

  return (
    <section className="sign">
      <Form onSubmit={handleSubmit} onFocus={handleClearForm} ref={form}>
        <Input placeholder="Email" name="email" type="email" ref={email} />
        <Input placeholder="Password" name="password" type="password" ref={password} />
        <Button className="continue" type="submit" loading={loading}>Sign In</Button>
      </Form>
    </section>
  )
}

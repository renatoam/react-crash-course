import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components"
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import { useAuthContext } from "../../context/authContext"
import { useFormContext } from "../../context/formContext"
import { useNotificationContext } from "../../context/notificationContext"
import './SignIn.scss'
 
export default function SignIn() {
  const { loading, setLoading } = useFormContext()
  const { authenticate } = useAuthContext()
  const { notify } = useNotificationContext()

  const password = useRef(null)
  const email = useRef(null)
  const form = useRef(null)

  const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    const isAuthorized = await authenticate(email.current)

    if (!isAuthorized) {
      notify('error', 'Credentials invalid.')
      form.current.reset()
      setLoading(false)
      return
    }
    
    notify('success', 'Welcome back!')
    return navigate('/')
  }

  return (
    <section className="sign">
      <Form onSubmit={handleSubmit} ref={form}>
        <Input placeholder="Email" name="email" type="email" ref={email} />
        <Input placeholder="Password" name="password" type="password" ref={password} />
        <Button className="continue" type="submit" loading={loading}>Sign In</Button>
      </Form>
    </section>
  )
}

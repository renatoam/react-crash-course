import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components"
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import { useAuthContext } from "../../context/authContext"
import { useFormContext } from "../../context/formContext"
import { useNotificationContext } from "../../context/notificationContext"
import './Authenticate.scss'
 
export default function Authenticate() {
  const { loading, setLoading } = useFormContext()
  const { authenticate } = useAuthContext()
  const { notify } = useNotificationContext()

  const email = useRef(null)
  const form = useRef(null)

  const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    const isAuthenticated = await authenticate(email.current)

    if (!isAuthenticated) {
      notify('error', 'User not found.')
      form.current.reset()
      setLoading(false)
      return
    }
    
    notify('success', 'Authenticated!')
    return navigate('/signin')
  }

  return (
    <section className="sign">
      <Form onSubmit={handleSubmit} ref={form}>
        <Input placeholder="Email" name="email" type="email" ref={email} />
        <Button className="continue" type="submit" loading={loading}>Continue</Button>
      </Form>
    </section>
  )
}

import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components"
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import { useAuthContext } from "../../context/authContext"
import { useFormContext } from "../../context/formContext"
import { useNotificationContext } from "../../context/notificationContext"
 
export default function Authenticate() {
  const { loading, setLoading, setFormError } = useFormContext()
  const { authenticate } = useAuthContext()
  const { notify } = useNotificationContext()

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
    
    try {
      await authenticate(email.current.value)
      notify('success', 'Authenticated!')
      return navigate('/auth/signin')
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
        <Button className="continue" type="submit" loading={loading}>Continue</Button>
      </Form>
    </section>
  )
}

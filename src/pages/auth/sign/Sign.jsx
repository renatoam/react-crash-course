import { useRef } from "react"
import { Button, Text } from "../../../components"
import Form from "../../../components/form/Form"
import Input from "../../../components/input/Input"
import { useAuthContext } from "../../../context/authContext"
import { useFormContext } from "../../../context/formContext"
import Info from "../info/Info"
import './Sign.scss'
 
export default function Sign() {
  const { loading, setLoading } = useFormContext()
  const { createUser } = useAuthContext()

  const buttonText = loading ? 'Processing...' : 'Continue, please'

  const user = useRef(null)
  const email = useRef(null)
  const form = useRef(null)
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    await createUser(user.current)
    
    form.current.reset()
    email.current.focus()
    setLoading(false)
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    user.current = {
      ...user.current,
      [name]: value
    }
  }

  return (
    <section className="sign">
      <Info />
      <Form onSubmit={handleSubmit} ref={form}>
        <Input placeholder="First Name" name="firstname" onChange={handleChange} />
        <Input placeholder="Last Name" name="lastname" onChange={handleChange} />
        <Input placeholder="Email" name="email" type="email" onChange={handleChange} ref={email} />
        <Input placeholder="Password" name="password" type="password" onChange={handleChange} />
        <Button className="continue" type="submit">{buttonText}</Button>
        <Text element="p">By clicking the button, you are agreeing to our <span>Terms and Services</span></Text>
      </Form>
    </section>
  )
}

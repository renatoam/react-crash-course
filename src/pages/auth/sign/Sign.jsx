import { useRef, useState } from "react"
import { Button, Text } from "../../../components"
import Form from "../../../components/form/Form"
import Input from "../../../components/input/Input"
import Info from "../info/Info"
import './Sign.scss'
 
export default function Sign() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  const buttonText = loading ? 'Processing...' : 'Continue'

  // const user = useRef(null)
  // const firstname = useRef(null)
  // const lastname = useRef(null)
  const form = useRef(null)

  const handleClick = () => {
    setLoading(true)
    console.log({ user })
    
    setTimeout(() => {
      form.current.reset()
      setLoading(false)
    }, 2000);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const elements = [...event.target.elements]
  //   const inputs = elements.filter(el => el.localName === 'input')

  //   console.log({ inputs })
  // }
  
  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   console.log({ user: user.current })
  //   lastname.current.focus()
  // }

  // renderiza a cada change nas inputs
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    // user.current = {
    //   ...user.current,
    //   [name]: value
    // }
    
    setUser((currentState) => {
      return {
        ...currentState,
        [name]: value
      }
    })
  }

  return (
    <section className="sign">
      <Info />
      {/* <Form onSubmit={handleSubmit}> */}
      <Form ref={form}>
        <strong>Estado:</strong> {user.firstname}
        {/* <strong>Ref:</strong> {user.current?.firstname} */}
        <Input placeholder="First Name" name="firstname" onChange={handleChange} />
        <Input placeholder="Last Name" name="lastname" onChange={handleChange} />
        {/* <Input placeholder="First Name" name="firstname" onChange={handleChange} ref={firstname} />
        <Input placeholder="Last Name" name="lastname" onChange={handleChange} ref={lastname} /> */}
        <Input placeholder="Email" name="email" type="email" onChange={handleChange} />
        <Input placeholder="Password" name="password" type="password" onChange={handleChange} />
        <Button className="continue" onClick={handleClick}>{buttonText}</Button>
        {/* <Button className="continue" type="submit">{buttonText}</Button> */}
        <Text element="p">By clicking the button, you are agreeing to our <span>Terms and Services</span></Text>
      </Form>
    </section>
  )
}

import { Login as LoginIcon, Logout } from "@icon-park/react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './Login.scss'
import Text from "../../../text/Text"
 
export default function Login() {
  const user = useSelector(state => state.user)
  const Icon = user ? Logout : LoginIcon
  const textContent = user ? 'Logout' : 'Login'
  const authLink = user ? '/auth/signout' : '/auth'

  return (
    <section role="button" className="login">
      <Link to={authLink}>
        <Text small>{textContent}</Text>
        <Icon />
      </Link>
    </section>
  )
}

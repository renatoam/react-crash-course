import { Login as LoginIcon, Logout } from "@icon-park/react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../../../context/authContext"
import './Login.scss'
 
export default function Login() {
  const { user } = useAuthContext()
  const Icon = user ? Logout : LoginIcon

  return (
    <button className="login">
      <Link to="/auth">
        <Icon />
      </Link>
    </button>
  )
}

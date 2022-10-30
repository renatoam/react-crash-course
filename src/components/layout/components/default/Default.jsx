import './Default.scss'
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Login from "../login/Login"
import Logo from "../logo/Logo"
import Menu from "../menu/Menu"

export default function Default({ children }) {
  return (
    <section className="layout">
      {children}
    </section>
  )
}

Default.Menu = Menu
Default.Logo = Logo
Default.Login = Login
Default.Header = Header
Default.Footer = Footer

import { Login, Logout } from "@icon-park/react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../context/authContext"
import './Layout.scss'
import PropTypes from 'prop-types'
 
export default function Layout({ children }) {
  const { user } = useAuthContext()

  // implement logout

  return (
    <section className="layout">
      <header className="layout__header">
        <figure className="layout__logo">
          <Link to="/">
            <img src="/images/react.svg" alt="React Crash Course" />
            <h1>React Course</h1>
          </Link>
        </figure>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__link">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__link">
              <Link to="/content">Conteúdo</Link>
            </li>
            <li className="navigation__link">
              <Link to="/contact">Contato</Link>
            </li>
            <li className="navigation__link">
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </nav>
        <button className="login">
          <Link to="/auth">
            {user
              ? <Logout />
              : <Login />}
          </Link>
        </button>
      </header>
      {children}
      <footer className="layout__footer">
        <p>2022 © Trainning - Renato Melo</p>
      </footer>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

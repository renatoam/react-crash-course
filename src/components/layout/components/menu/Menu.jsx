import './Menu.scss'
import { links } from "./links"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../../../../store/menuSlice"
 
export default function Menu() {
  const dispatch = useDispatch()
  const menu = useSelector(state => state.menu)
  
  function handleMenu() {
    dispatch(toggleMenu())
  }

  return (
    <>
      <section className="menu-trigger" role="button" onClick={handleMenu}>
        <div className="icon">D</div>
      </section>
      <nav className={`menu ${menu ? 'opened' : ''}`}>
        <ul>
          {links.map(link => (
            <li key={link.id} className="menu__link">
              <Link to={link.link}>
                {link.description}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="overlay" onClick={handleMenu}></section>
    </>
  )
}

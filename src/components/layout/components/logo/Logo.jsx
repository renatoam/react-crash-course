import { Link } from "react-router-dom"
import './Logo.scss'
 
export default function Logo() {

  return (
    <figure className="logo">
      <Link to="/">
        <section aria-hidden="true">
          <span>React</span>
        </section>
        <h1 title="React Crash Course">
          <img aria-hidden="true" src="/images/react.svg" alt="React Crash Course" />
        </h1>
        <section aria-hidden="true">
          <span>Course</span>
        </section>
      </Link>
    </figure>
  )
}

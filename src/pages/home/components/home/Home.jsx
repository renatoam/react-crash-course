import Hero from "../hero/Hero"
import Modules from "../modules/Modules"
import "./Home.scss"
 
export default function Home({ children }) {
  return (
    <section className="home">
      {children}
    </section>
  )
}

Home.Hero = Hero
Home.Modules = Modules

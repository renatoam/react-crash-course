import { EmotionUnhappy } from "@icon-park/react"
import { Link } from "react-router-dom"
import './NotFound.scss'
 
export default function NotFound() {

  return (
    <main className="notfound">
      <section className="notfound__wrapper">
        <section className="notfound__info">
          <h1>Página não encontrada!</h1>
          <EmotionUnhappy />
        </section>
        <button className="notfound__call-to-action">
          <Link to="/">
            Voltar pra Home
          </Link>
        </button>
      </section>
    </main>
  )
}

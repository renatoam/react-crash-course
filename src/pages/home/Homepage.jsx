import { DataDisplay, LatticePattern, Tool, TreeList, TwoEllipses } from "@icon-park/react"
import './Homepage.scss'

export default function Homepage() {
  return (
    <section className="home">
      <article className="hero">
        <section className="hero__information">
          <h2 className="hero__title">Sejam bem-vindos ao fabuloso mundo do React JS!</h2>
          <p className="hero__description">Descubra os pilares e as principais features da biblioteca/framework mais usada do mercado. Isso e muito mais neste <span className="highlight">React Crash Course.</span></p>
          <button className="hero__call-to-action">Comece já!</button>
        </section>
        <figure className="hero__image">
          <img src="/images/react.svg" alt="React Logo" />
          <img src="/images/blob-medium-haikei.svg" alt="Background Shape" />
        </figure>
      </article>
      <article className="course">
        <h2 className="course__title">Tópicos do Curso</h2>
        <section className="contents">
          <section className="contents__card">
            <a href="/lesson1">
              <figure className="contents__icon">
                <TwoEllipses />
              </figure>
              <h3>O que é React?</h3>
              <p>Afinal, React é uma biblioteca ou um framework? Aliás, qual a diferença entre biblioteca e framework? Descubra agora.</p>
            </a>
          </section>
          <section className="contents__card">
            <a href="/lesson2">
              <figure className="contents__icon">
                <Tool />
              </figure>
              <h3>React Básico</h3>
              <p>Descubra agora as principais features do React e como usá-las no dia-a-dia. JSX, props, hooks e muito mais.</p>
            </a>
          </section>
          <section className="contents__card">
            <a href="/lesson3">
              <figure className="contents__icon">
                <TreeList />
              </figure>
              <h3>React Dinâmico</h3>
              <p>Aprenda sobre gerenciamento de estado, listas dinâmicas e renderização condicional. Técnicas essenciais para o desenvolvimento web.</p>
            </a>
          </section>
          <section className="contents__card">
            <a href="/lesson4">
              <figure className="contents__icon">
                <DataDisplay />
              </figure>
              <h3>Manipulando Dados</h3>
              <p>Aprenda a consumir APIs externas no React, criar rotas para sua aplicação, além de manipular formulários e eventos.</p>
            </a>
          </section>
          <section className="contents__card">
            <a href="/lesson5">
              <figure className="contents__icon">
                <LatticePattern />
              </figure>
              <h3>React Patterns</h3>
              <p>Com grandes poderes vem grandes responsabilidades. Flexibilidade demais pode ser um perigo. Aprenda a organizar seu projeto e prevenir o caos.</p>
            </a>
          </section>
        </section>
      </article>
    </section>
  )
}

import { DataDisplay, LatticePattern, Tool, TreeList, TwoEllipses } from "@icon-park/react"
import './Homepage.scss'

export default function Homepage() {
  return (
    <section className="home">
      <article className="hero">
        <section className="hero__information">
          <h2 className="hero__title">React Crash Course</h2>
          <p className="hero__description">Descubra os pilares e se aprofunde nas principais features do React. E ainda, conheça alguns dos principais conceitos de programação e desenvolvimento web.</p>
          <button className="hero__call-to-action">Começar</button>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores error animi odio tempora enim, sapiente.</p>
            </a>
          </section>
          <section className="contents__card">
            <a href="/lesson2">
              <figure className="contents__icon">
                <Tool />
              </figure>
              <h3>React Básico</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugiat excepturi cum, itaque veritatis odit blanditiis aut quis.</p>
            </a>
          </section>
          <section className="contents__card">
            <a href="/lesson3">
              <figure className="contents__icon">
                <TreeList />
              </figure>
              <h3>React Dinâmico</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, deleniti enim officia eum iste quidem quos architecto.</p>
            </a>
          </section>
          <section className="contents__card">
            <a href="/lesson4">
              <figure className="contents__icon">
                <DataDisplay />
              </figure>
              <h3>Manipulando Dados</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta hic, assumenda in at repellat accusamus corporis sint necessitatibus quis quo.</p>
            </a>
          </section>
          <section className="contents__card">
            <a href="/lesson5">
              <figure className="contents__icon">
                <LatticePattern />
              </figure>
              <h3>React Patterns</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia recusandae a qui veniam, velit possimus.</p>
            </a>
          </section>
        </section>
      </article>
    </section>
  )
}

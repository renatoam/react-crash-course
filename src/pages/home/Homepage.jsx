import './Homepage.scss'
import { DataDisplay, LatticePattern, Tool, TreeList, TwoEllipses } from "@icon-park/react"
import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <main className="home">
      <header className="home__header">
        <figure className="home__logo">
          <a href="/">
            <img src="/images/react.svg" alt="React Crash Course" />
            <h1>React Course</h1>
          </a>
        </figure>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__link">
              <a href="#home">Home</a>
            </li>
            <li className="navigation__link">
              <a href="#content">Content</a>
            </li>
            <li className="navigation__link">
              <a href="#contact">Contact</a>
            </li>
            <li className="navigation__link">
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <button className="login">
          <Link to="/auth">
            Login
          </Link>
        </button>
      </header>
      <article className="hero">
        <section className="hero__information">
          <h2 className="hero__title">React Crash Course</h2>
          <p className="hero__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi quibusdam eos at odit! In beatae quibusdam explicabo ea excepturi expedita veniam modi sequi possimus odit reprehenderit, amet ipsam error?</p>
          <button className="hero__call-to-action">Começar</button>
        </section>
        <figure className="hero__image">
          <img src="/images/react.svg" alt="React Logo" />
          <img src="/images/blob-medium-haikei.svg" alt="Background Shape" />
        </figure>
      </article>
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
      <footer className="home__footer">
        <p>2022 © Trainning - Renato Melo</p>
      </footer>
    </main>
  )
}

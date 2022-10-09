import './Container.scss'
import { Component } from 'react'

export default class Container extends Component {
  constructor({ children }){
    super()
    this.children = children
  }

  render() {
    return (
      <section className="container">
        {this.children}
      </section>
    )
  }
}

import './Container.scss'
import { Component } from 'react'
import PropTypes from 'prop-types'

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

Container.propTypes = {
  children: PropTypes.element
}

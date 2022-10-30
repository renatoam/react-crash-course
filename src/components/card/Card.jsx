import './Card.scss'
import PropTypes from 'prop-types'

export default function Card(props) {
  const { id, children } = props

  return (
    <section className="card" id={id}>{children}</section>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  children: PropTypes.element
}

import './Container.scss'
import PropTypes from 'prop-types'

export default function Container(props) {
  const { type, children } = props

  return (
    <section className={`container ${type}`}>
      {children}
    </section>
  )
}

Container.defaultProps = {
  type: 'elements'
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.element]),
  type: PropTypes.oneOf(['text', 'elements'])
}

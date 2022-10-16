import './Text.scss'
import PropTypes from 'prop-types'

export default function Text(props) {
  const { element, children } = props
  const Element = element
  const className = element === 'p' ? 'description' : 'title'

  return (
    <Element className={className}>{children}</Element>
  )
}

Text.propTypes = {
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  children: PropTypes.element
}

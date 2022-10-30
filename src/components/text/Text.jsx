import './Text.scss'
import PropTypes from 'prop-types'

export default function Text(props) {
  const { element, className, children } = props
  const Element = element
  const textStyle = element === 'p' ? 'paragraph' : element

  return (
    <Element className={`${textStyle} ${className}`}>{children}</Element>
  )
}

Text.defaultProps = {
  element: 'p',
  className: ''
}

Text.propTypes = {
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.element])
}

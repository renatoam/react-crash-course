import './Text.scss'
import PropTypes from 'prop-types'

export default function Text(props) {
  const { element, small, className, children } = props
  const Element = element
  const textStyle = element === 'p' ? 'paragraph' : element
  const sizeStyle = small ? 'small' : ''

  return (
    <Element className={`${textStyle} ${className} ${sizeStyle}`}>{children}</Element>
  )
}

Text.defaultProps = {
  element: 'p',
  size: false,
  className: ''
}

Text.propTypes = {
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p']),
  small: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.element])
}

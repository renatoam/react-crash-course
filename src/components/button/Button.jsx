import './Button.scss'
import PropTypes from 'prop-types'

export default function Button(props) {
  const { className, loading, helper = false, children, ...rest } = props
  
  return (
    <button
      type="button"
      className={className}
      disabled={!!loading}
      {...rest}
    >
      {loading && !helper ? 'Processing...' : children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  helper: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  rest: PropTypes.object
}

import './Button.scss'
import PropTypes from 'prop-types'
import { LoadingFour } from "@icon-park/react"

export default function Button(props) {
  const { variant, icon, loading, alternative, children, ...rest } = props
  
  const isAlternative = alternative ? 'alternative' : ''
  const variantStyle = variant === 'default' ? '' : variant
  const Icon = icon
  
  return (
    <button
      type="button"
      className={`button ${variantStyle} ${isAlternative}`}
      disabled={!!loading}
      {...rest}
    >
      {icon ? Icon : null}
      {loading && !alternative ? <LoadingFour /> : children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'default',
  icon: false,
  loading: false,
  alternative: false,
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'ghost', 'text']),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  loading: PropTypes.bool,
  alternative: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  rest: PropTypes.object
}

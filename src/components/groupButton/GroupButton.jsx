import './GroupButton.scss'
import PropTypes from 'prop-types'
 
export default function GroupButton(props) {
  const { flex, children } = props
  const isFlex = flex ? 'flex' : ''

  return (
    <section className={`group-button ${isFlex}`}>
      {children}
    </section>
  )
}

GroupButton.defaultProps = {
  flex: false,
}

GroupButton.propTypes = {
  flex: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.element]),
}

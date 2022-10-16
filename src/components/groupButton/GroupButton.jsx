import './GroupButton.scss'
import PropTypes from 'prop-types'
 
export default function GroupButton({ children }) {
  return (
    <section className="group-button">
      {children}
    </section>
  )
}

GroupButton.propTypes = {
  children: PropTypes.element
}

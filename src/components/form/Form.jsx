import { forwardRef } from "react"
import { useFormContext } from "../../context/formContext"
import './Form.scss'
import PropTypes from 'prop-types'
 
const Form = forwardRef(({ children, ...rest }, ref) => {
  const { formError } = useFormContext()
  const className = formError ? 'form error animate__animated animate__shakeX' : 'form'
  
  return (
    <form className={className} ref={ref} {...rest}>{children}</form>
  )
})

export default Form

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.element]),
  rest: PropTypes.object
}

import { forwardRef } from "react"
import './Form.scss'
 
const Form = forwardRef(({ children, ...rest }, ref) => {
  return (
    <form className="form" ref={ref} {...rest}>{children}</form>
  )
})

export default Form

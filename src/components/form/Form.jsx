import { forwardRef } from "react"
import { useFormContext } from "../../context/formContext"
import './Form.scss'
 
const Form = forwardRef(({ children, ...rest }, ref) => {
  const { formError } = useFormContext()
  const className = formError ? 'form error animate__animated animate__shakeX' : 'form'
  
  return (
    <form className={className} ref={ref} {...rest}>{children}</form>
  )
})

export default Form

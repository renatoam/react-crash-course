import { forwardRef } from "react"
import './Input.scss'
 
const Input = forwardRef((props, ref) => {
  const { placeholder, name, type = "text", ...rest } = props

  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      name={name}
      ref={ref}
      {...rest}
    />
  )
})

export default Input

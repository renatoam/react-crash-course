import { forwardRef } from "react"
import './Input.scss'
 
const Input = forwardRef((props, ref) => {
  const {
    placeholder,
    name,
    type = "text",
    error = false,
    errorMessage = '',
    ...rest
  } = props

  return (
    <section className="input-control">
      <input
        type={type}
        className={`input ${error ? 'error' : ''}`}
        placeholder={placeholder}
        name={name}
        ref={ref}
        {...rest}
      />
      {error && <span className="message">{errorMessage}</span>}
    </section>
  )
})

export default Input

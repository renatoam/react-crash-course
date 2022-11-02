import PropTypes from 'prop-types'
import { forwardRef, memo, useCallback, useState } from "react"
import './Input.scss'
import InputPassword from "./InputPassword/InputPassword"
 
const Input = forwardRef((props, ref) => {
  const {
    placeholder,
    name,
    type = "text",
    validate,
    ...rest
  } = props

  const [error, setError] = useState(null)

  const handleChange = useCallback((event) => {
    if (!validate) return

    const value = event.target.value
    const fieldName = event.target.name
    const validation = validate(fieldName, value)

    if (validation?.error) {
      return setError(validation)
    }

    setError(null)
  }, [])

  if (name === 'password') return <InputPassword ref={ref} {...props} />

  return (
    <section className="input-control">
      <input
        type={type}
        className={`input ${error ? 'error' : ''}`}
        placeholder={placeholder}
        name={name}
        ref={ref}
        onChange={handleChange}
        {...rest}
      />
      {error && <span className="message">{error.message}</span>}
    </section>
  )
})

export default memo(Input)

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  rest: PropTypes.object
}

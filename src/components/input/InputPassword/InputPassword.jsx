import { forwardRef, useState } from "react"
import '../Input.scss'
import PropTypes from 'prop-types'
import { CheckSmall, CloseSmall, PreviewClose, PreviewOpen } from "@icon-park/react"
import Text from "../../text/Text"
 
const InputPassword = forwardRef((props, ref) => {
  const {
    placeholder,
    name,
    type = "password",
    validate,
    ...rest
  } = props

  const [error, setError] = useState(null)
  const [rulesVisibility, setRulesVisibility] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  
  const getIconPasswordRules = (rule) => {
    const isRuleViolated = error?.issues?.some(iss => iss.params.rule === rule) 
    
    if (isRuleViolated) {
      return <CloseSmall />
    }
    
    return <CheckSmall />
  }

  const handlePasswordRules = () => {
    setRulesVisibility(!rulesVisibility)
  }

  const handleChange = (event) => {
    const value = event.target.value
    const fieldName = event.target.name
    const validation = validate(fieldName, value)

    if (validation?.error) {
      return setError(validation)
    }

    if (error) {
      setError('')
    }
  }

  return (
    <section className="input-control">
      <span
        role="button"
        className="show-password"
        onClick={() => setPasswordVisibility(!passwordVisibility)}
      >
        {passwordVisibility ? <PreviewOpen /> : <PreviewClose />}
      </span>
      <input
        type={passwordVisibility ? "text" : type}
        className={`input ${error ? 'error' : ''}`}
        placeholder={placeholder}
        name={name}
        ref={ref}
        onChange={handleChange}
        onFocus={handlePasswordRules}
        onBlur={handlePasswordRules}
        {...rest}
      />
      <section className={`password-rules ${rulesVisibility ? 'visible' : ''}`}>
        <Text small>Password should contain:</Text>
        <section className="password-rules__content">
          <section className="password-rules__column">
            <div>
              {getIconPasswordRules('lowercase')}
              <Text small>Lower case</Text>
            </div>
            <div>
              {getIconPasswordRules('uppercase')}
              <Text small>Upper case</Text>
            </div>
          </section>
          <section className="password-rules__column">
            <div>
              {getIconPasswordRules('number')}
              <Text small>Number</Text>
            </div>
            <div>
              {getIconPasswordRules('minimum')}
              <Text small>At least 8 digits</Text>
            </div>
          </section>
        </section>
      </section>
    </section>
  )
})

export default InputPassword

InputPassword.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  rulesVisibility: PropTypes.bool,
  validate: PropTypes.func,
  rest: PropTypes.object
}

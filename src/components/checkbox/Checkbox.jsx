import { CheckSmall } from "@icon-park/react"
import './Checkbox.scss'
 
export default function Checkbox(props) {
  const { id, name, description, handleChange } = props

  return (
    <label htmlFor={id} className="checkbox-control">
      <input id={id} name={name} type="checkbox" onChange={handleChange} />
      <span className="checkmark"><CheckSmall /></span>
      <span>{description}</span>
    </label>
  )
}

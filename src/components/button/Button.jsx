import './Button.scss'

export default function Button(props) {
  const { className, children } = props
  
  return (
    <button
      type="button"
      className={`more ${className}`}
    >
      {children}
    </button>
  )
}

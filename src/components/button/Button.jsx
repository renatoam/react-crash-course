import './Button.scss'

export default function Button(props) {
  const { className, children, ...rest } = props
  
  return (
    <button
      type="button"
      className={className}
      {...rest}
    >
      {children}
    </button>
  )
}

import './Button.scss'

export default function Button(props) {
  const { className, loading, children, ...rest } = props
  
  return (
    <button
      type="button"
      className={className}
      {...rest}
    >
      {loading ? 'Processing...' : children}
    </button>
  )
}

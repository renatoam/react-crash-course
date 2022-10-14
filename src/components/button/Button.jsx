import './Button.scss'

export default function Button(props) {
  const { className, loading, helper = false, children, ...rest } = props
  
  return (
    <button
      type="button"
      className={className}
      disabled={!!loading}
      {...rest}
    >
      {loading && !helper ? 'Processing...' : children}
    </button>
  )
}

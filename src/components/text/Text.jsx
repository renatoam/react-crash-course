import './Text.scss'

export default function Text(props) {
  const { element, children } = props
  const Element = element
  const className = element === 'p' ? 'description' : 'title'

  return (
    <Element className={className}>{children}</Element>
  )
}

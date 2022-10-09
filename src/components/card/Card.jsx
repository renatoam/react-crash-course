import './Card.scss'

export default function Card(props) {
  const { id, children } = props

  return (
    <section className="card" id={id}>{children}</section>
  )
}

import './Image.scss'

export default function Image(props) {
  const { src, alt } = props

  return (
    <figure className="image">
      <img src={src} alt={alt} />
    </figure>
  )
}

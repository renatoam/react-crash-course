import './Image.scss'
import PropTypes from 'prop-types'

export default function Image(props) {
  const { src, alt } = props

  return (
    <figure className="image">
      <img src={src} alt={alt} />
    </figure>
  )
}

Image.defaultProps = {
  src: '../images/placeholder.jpg',
  alt: 'Imagem alternativa'
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

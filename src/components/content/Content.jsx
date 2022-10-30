import './Content.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Content({ model, previous, next }) {
  const { type, name, image, description } = model

  return (
    <section className={`content ${type}`}>
      <header className="content__header">
        <figure className="content__image">
          <img src={image?.src} alt={image?.alt} />
        </figure>
        <h1 className="content__title">{name}</h1>
      </header>
      <p className="content__description">{description}</p>
      <section className="content__actions">
        <button className="previous">
          <Link to={previous}>Previous</Link>
        </button>
        <button className="next">
          <Link to={next}>Next</Link>
        </button>
      </section>
    </section>
  )
}

Content.propTypes = {
  model: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
  previous: PropTypes.string,
  next: PropTypes.string
}

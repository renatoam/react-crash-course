import './App.css'
import './App.scss'
import styles from './App.module.css'

export default function App() {
  return (
    <section className={styles.container}>
      <section className="card" id="sedans">
        <figure className="image">
          <img src="/images/icon-sedans.svg" alt="Sedans Icon" />
        </figure>
        <h2 className="title">Sedans</h2>
        <p className="description">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
        <button
          type="button"
          className="more"
          style={{
            color: "hsl(31, 77%, 52%)"
          }}
        >
          Learn More
        </button>
      </section>
      <section className="card" id="suvs">
        <figure className="image">
          <img src="/images/icon-suvs.svg" alt="Suvs Icon" />
        </figure>
        <h2 className="title">Suvs</h2>
        <p className="description">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
        <button
          type="button"
          className="more"
          style={{
            color: "hsl(184, 100%, 22%)"
          }}
        >
          Learn More
        </button>
      </section>
      <section className="card" id="luxury">
        <figure className="image">
          <img src="/images/icon-luxury.svg" alt="Luxury Icon" />
        </figure>
        <h2 className="title">Luxury</h2>
        <p className="description">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
        <button
          type="button"
          className="more"
          style={{
            color: "hsl(179, 100%, 13%)"
          }}
        >
          Learn More
        </button>
      </section>
    </section>
  )
}

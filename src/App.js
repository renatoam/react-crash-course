import { useEffect } from 'react'
import './App.css'
import {
  Button,
  Card,
  Container,
  Image,
  Text
} from './components'

export default function App() {
  useEffect(() => {
    console.log('Hooks are very useful!')
  }, [])

  return (
    <Container>
      <Card id="sedans">
        <Image src="/images/icon-sedans.svg" alt="Sedans Icon" />
        <Text element="h2">Sedans</Text>
        <Text element="p">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</Text>
        <Button className="sedans">
          Learn More
        </Button>
      </Card>
      <Card id="suvs">
        <Image src="/images/icon-suvs.svg" alt="Suvs Icon" />
        <Text element="h2">Suvs</Text>
        <Text element="p">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</Text>
        <Button className="suvs">
          Learn More
        </Button>
      </Card>
      <Card id="luxury">
        <Image src="/images/icon-luxury.svg" alt="Luxury Icon" />
        <Text element="h2">Luxury</Text>
        <Text element="p">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</Text>
        <Button className="luxury">
          Learn More
        </Button>
      </Card>
    </Container>
  )
}

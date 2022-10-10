import './App.css'
import {
  Button,
  Card,
  Container,
  Image,
  Text
} from './components'
import cards from './db'

export default function App() {
  if (!cards.length) return "No cards available."

  return (
    <Container>
      {cards.map(card => {
        return (
          <Card id={card.type} key={card.id}>
            <Image src={card.image} alt={card.alternative} />
            <Text element="h2">{card.name}</Text>
            <Text element="p">{card.description}</Text>
            <Button className={card.type}>Learn More</Button>
          </Card>
        )
      })}
    </Container>
  )
}

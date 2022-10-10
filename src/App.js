import { useEffect, useState } from "react"
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
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    if (cards.length) {
      setCardList(cards)
    }
  }, [])

  if (!cardList.length) return "No cards available."

  return (
    <Container>
      {cardList.map(card => {
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

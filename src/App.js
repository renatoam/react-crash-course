import { useEffect, useState } from 'react'
import './App.css'
import {
  Button,
  Card,
  Container,
  Image,
  Text
} from './components'
import axios from 'axios'

export default function App() {
  const [cardList, setCardList] = useState([])

  // async function fetchData() {
  //   const response = await fetch('http://localhost:3000/cards')
  //   const cards = await response.json()

  //   // This is just to show the conditional rendering
  //   setTimeout(() => {
  //     setCardList(cards)
  //   }, 2000);
  // }

  async function fetchData() {
    const response = await axios('http://localhost:3004/cards')
    const cards = response.data

    // This is just to show the conditional rendering
    setTimeout(() => {
      setCardList(cards)
    }, 2000);
  }

  useEffect(() => {
    fetchData()
  }, [])

  // comment cards constant content to show this
  if (!cardList.length) return "No cards available."

  return (
    <Container>
      {cardList.map(card => {
        return (
          <Card id={card.type} key={card.id}>
            {/* Remove optional chaining to check the error */}
            <Image src={card.image?.src} alt={card.image?.alternative} />
            <Text element="h2">{card.name}</Text>
            <Text element="p">{card.description}</Text>
            <Button className={card.type}>Learn More</Button>
          </Card>
        )
      })}
    </Container>
  )
}

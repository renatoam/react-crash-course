import {
  Button,
  Card,
  Container,
  Image,
  Text
} from '../../components'
import { useCardsContext } from "../../context/cardsContext"
import './Cards.scss'
import { Link } from 'react-router-dom'

export default function Cards() {
  const { cardList } = useCardsContext()

  if (!cardList.length) return "No cards available."

  return (
    <Container>
      {cardList.map(card => {
        return (
          <Card id={card.type} key={card.id}>
            <Image src={card.image?.src} alt={card.image?.alternative} />
            <Text element="h2">{card.name}</Text>
            <Text element="p">{card.description}</Text>
            <Button className={`more ${card.type}`}>
              <Link to={`/${card.type}`}>Learn More</Link>
            </Button>
          </Card>
        )
      })}
    </Container>
  )
}

import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  Container,
  Image,
  Text
} from '../../components'
import { useSummaryContext } from "../../context/summaryContext"
import './Summary.scss'

export default function Summary() {
  const { summary } = useSummaryContext()

  if (!summary.length) return "No cards available."

  return (
    <Container>
      {summary.map(card => {
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

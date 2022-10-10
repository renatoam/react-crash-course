import Content from "../../components/content/Content"
import { useCardsContext } from "../../context/cardsContext"

export default function Luxury() {
  const { luxury } = useCardsContext()

  if (!luxury) return 'No content available'

  return <Content model={luxury} previous="/suvs" next="/cards" />
}

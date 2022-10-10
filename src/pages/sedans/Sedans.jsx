import Content from "../../components/content/Content"
import { useCardsContext } from "../../context/cardsContext"

export default function Sedans() {
  const { sedans } = useCardsContext()

  if (!sedans) return 'No content available'

  return <Content model={sedans} previous="/cards" next="/suvs" />
}

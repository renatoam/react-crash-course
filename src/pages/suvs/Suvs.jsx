import Content from "../../components/content/Content"
import { useCardsContext } from "../../context/cardsContext"

export default function Suvs() {
  const { suvs } = useCardsContext()

  if (!suvs) return 'No content available'

  return <Content model={suvs} previous="/sedans" next="/luxury" />
}

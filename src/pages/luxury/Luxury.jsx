import Content from "../../components/content/Content"
import { useSummaryContext } from "../../context/summaryContext"

export default function Luxury() {
  const { luxury } = useSummaryContext()

  if (!luxury) return 'No content available'

  return <Content model={luxury} previous="/suvs" next="/cards" />
}

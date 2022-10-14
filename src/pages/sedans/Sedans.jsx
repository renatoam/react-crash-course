import Content from "../../components/content/Content"
import { useSummaryContext } from "../../context/summaryContext"

export default function Sedans() {
  const { sedans } = useSummaryContext()

  if (!sedans) return 'No content available'

  return <Content model={sedans} previous="/cards" next="/suvs" />
}

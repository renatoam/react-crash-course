import Content from "../../components/content/Content"
import { useSummaryContext } from "../../context/summaryContext"

export default function Suvs() {
  const { suvs } = useSummaryContext()

  if (!suvs) return 'No content available'

  return <Content model={suvs} previous="/sedans" next="/luxury" />
}

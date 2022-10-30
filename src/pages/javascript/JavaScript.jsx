import Content from "../../components/content/Content"
import { useSummaryContext } from "../../context/summaryContext"

export default function JavaScript() {
  const { summary } = useSummaryContext()
  const jsData = summary?.find(item => item.type === 'javascript')

  if (!jsData) return 'No content available'

  return <Content model={jsData} previous="/react" next="/css" />
}

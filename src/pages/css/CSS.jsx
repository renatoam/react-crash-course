import Content from "../../components/content/Content"
import { useSummaryContext } from "../../context/summaryContext"

export default function CSS() {
  const { summary } = useSummaryContext()
  const cssData = summary?.find(item => item.type === 'css')

  if (!cssData) return 'No content available'

  return <Content model={cssData} previous="/javascript" next="/summary" />
}

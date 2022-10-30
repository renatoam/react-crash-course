import Content from "../../components/content/Content"
import { useSummaryContext } from "../../context/summaryContext"

export default function React() {
  const { summary } = useSummaryContext()
  const reactData = summary?.find(item => item.type === 'react')

  if (!reactData) return 'No content available'

  return <Content model={reactData} previous="/summary" next="/javascript" />
}

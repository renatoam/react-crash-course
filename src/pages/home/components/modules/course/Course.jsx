import { Link } from "react-router-dom"
import Text from "../../../../../components/text/Text"
import WrapperCourse from "./wrapperCourse/WrapperCourse"
import IconCourse from "./iconCourse/IconCourse"
 
export default function Course(props) {
  const { link, icon, title, description } = props

  return (
    <WrapperCourse>
      <Link to={link}>
        <IconCourse icon={icon} />
        <Text element="h3">{title}</Text>
        <Text element="p">{description}</Text>
      </Link>
    </WrapperCourse>
  )
}

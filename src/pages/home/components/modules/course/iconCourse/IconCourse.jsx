import './IconCourse.scss'
 
export default function IconCourse(props) {
  const { icon } = props
  const Icon = icon

  return (
    <figure className="course-icon">
      <Icon />
    </figure>
  )
}

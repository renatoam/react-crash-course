import Text from "../../../../components/text/Text"
import Module from "./module/Module"
import Content from "./content/Content"
import Course from "./course/Course"
import { courses } from "./course/courses"

export default function Modules() {
  return (
    <Module>
      <Text element="h2">Tópicos do Curso</Text>
      <Content>
        {courses.map(course => (
          <Course
            key={course.id}
            link={course.link}
            title={course.title}
            description={course.description}
            icon={course.icon}
          />
        ))}
      </Content>
    </Module>
  )
}

import './WrapperCourse.scss'
 
export default function WrapperCourse({ children }) {
  return (
    <section className="course-card">
      {children}
    </section>
  )
}

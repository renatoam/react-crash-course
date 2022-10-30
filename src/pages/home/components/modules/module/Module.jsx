import './Module.scss'
 
export default function Module({ children }) {

  return (
    <article className="course" id="course">
      {children}
    </article>
  )
}

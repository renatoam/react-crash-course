import './Wrapper.scss'
 
export default function Wrapper(props) {
  const { className, children } = props
  
  return (
    <section className={`wrapper ${className}`}>
      {children}
    </section>  
  )
}

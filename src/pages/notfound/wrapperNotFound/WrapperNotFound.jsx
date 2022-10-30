import './WrapperNotFound.scss'

export default function WrapperNotFound({ children }) {
  return (
    <main className="notfound">
      <section className="notfound__wrapper">
        {children}
      </section>
    </main>
  )
}

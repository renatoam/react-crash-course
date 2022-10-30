export default function WrapperHero({ children }) {
  return (
    <article className="hero">
      <section className="hero__information">
        {children}
      </section>
    </article>
  )
}

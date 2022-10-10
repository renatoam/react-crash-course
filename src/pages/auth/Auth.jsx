import './Auth.scss'
import Intro from "./intro"
import Sign from "./sign/Sign"

export default function Auth() {
  return (
    <main className="auth">
      <section className="wrapper">
        <Intro />
        <Sign />
      </section>
    </main>
  )
}

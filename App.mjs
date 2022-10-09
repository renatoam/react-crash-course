import Button from "./components/Button.mjs"
import Text from "./components/Text.mjs"

function MyApp() {
  const [text, setText] = React.useState('Hello, World!')

  const handleClick = () => setText('Hello, Renato!')

  return (
    <section className="card">
      <h1>React</h1>
      <Text text={text} />
      <Button handleClick={handleClick} />
    </section>
  )
}

export default MyApp

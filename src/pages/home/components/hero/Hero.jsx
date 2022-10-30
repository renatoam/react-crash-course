import { DoubleDown } from "@icon-park/react"
import { Button, Container, GroupButton, Text } from "../../../../components"
import './Hero.scss'
import WrapperHero from "./wrapperHero/WrapperHero"
 
export default function Hero() {
  return (
    <WrapperHero>
      <Text element="h1">Sejam bem-vindos ao fabuloso mundo do React JS!</Text>
      <Container type="text">
        <Text className="hero__description">Descubra os pilares e as principais features da biblioteca/framework mais usada do mercado. Isso e muito mais neste <span className="highlight">React Crash Course.</span></Text>
      </Container>
      <GroupButton>
        <Button>Comece já!</Button>
      </GroupButton>
      <a href="#course">
        <DoubleDown />
      </a>
    </WrapperHero>
  )
}

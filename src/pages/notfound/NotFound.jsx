import { Link } from "react-router-dom"
import { EmotionUnhappy } from "@icon-park/react"
import { Button, Container, Text } from "../../components"
import WrapperNotFound from "./wrapperNotFound/WrapperNotFound"
 
export default function NotFound() {
  return (
    <WrapperNotFound>
      <Container type="text">
        <Text element="h1">Página não encontrada!</Text>
        <EmotionUnhappy />
      </Container>
      <Button>
        <Link to="/">
          Voltar pra Home
        </Link>
      </Button>
    </WrapperNotFound>
)
}

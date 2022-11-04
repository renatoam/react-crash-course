import { Link } from "react-router-dom"
import { EmotionHappy } from "@icon-park/react"
import { Button, Container, Text, Wrapper } from "../../components"
import { useAuthContext } from "../../context/authContext"
import { useEffect } from "react"
 
export default function SignOut() {
  const { signOut } = useAuthContext()

  useEffect(() => {
    signOut()
  }, [])

  return (
    <Wrapper>
      <Container type="text">
        <Text element="h1">Você foi deslogado!</Text>
        <EmotionHappy />
      </Container>
      <Button>
        <Link to="/">
          Voltar pra Home
        </Link>
      </Button>
    </Wrapper>
)
}

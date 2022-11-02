import { Button } from "../../components"
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import useAuthenticate from "../../hooks/useAuthenticate"
import Wrapper from "../../components/wrapper/Wrapper"
 
export default function Authenticate() {
  const {
    handleClearForm,
    handleSubmit,
    handleValidation,
    loading,
    form,
    email
  } = useAuthenticate()

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} onFocus={handleClearForm} ref={form}>
        <Input
          placeholder="Email"
          name="email"
          type="email"
          ref={email}
          validate={handleValidation}
        />
        <Button type="submit" loading={loading}>Continue</Button>
      </Form>
    </Wrapper>
  )
}

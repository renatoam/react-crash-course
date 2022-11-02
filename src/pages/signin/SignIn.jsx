import { Button } from "../../components"
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import useSignIn from "../../hooks/useSignIn"
import Wrapper from "../../components/wrapper/Wrapper"
 
export default function SignIn() {
  const {
    refs,
    loading,
    inputEmailState,
    handleClearForm,
    handleSubmit,
    handleValidation
  } = useSignIn()

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} onFocus={handleClearForm} ref={refs.form}>
        <Input
          placeholder="Email"
          name="email"
          type="email"
          ref={refs.email}
          defaultValue={inputEmailState}
          validate={handleValidation}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          ref={refs.password}
        />
        <Button type="submit" loading={loading}>Sign In</Button>
      </Form>
    </Wrapper>
  )
}

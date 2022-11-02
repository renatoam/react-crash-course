import { Delete } from "@icon-park/react"
import { Button, Text } from "../../components"
import Form from "../../components/form/Form"
import GroupButton from "../../components/groupButton/GroupButton"
import Input from "../../components/input/Input"
import Wrapper from "../../components/wrapper/Wrapper"
import useSignUp from "../../hooks/useSignUp"
 
export default function SignUp() {
  const {
    refs,
    loading,
    handleClearForm,
    handleSubmit,
    handleValidation
  } = useSignUp()

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} ref={refs.form}>
        <Input
          placeholder="First Name"
          name="firstname"
          validate={handleValidation}
          ref={refs.firstnameRef}
        />
        <Input
          placeholder="Last Name"
          name="lastname"
          validate={handleValidation}
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          validate={handleValidation}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          method="create"
          validate={handleValidation}
          ref={refs.passwordRef}
        />
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          validate={handleValidation}
        />
        <GroupButton flex>
          <Button
            type="submit"
            loading={loading}
          >
            Sign Up
          </Button>
          <Button
            alternative
            loading={loading}
            onClick={handleClearForm}
          >
              <Delete />
          </Button>
        </GroupButton>
        <Text>By clicking the button, you are agreeing to our <span>Terms and Services</span></Text>
      </Form>
    </Wrapper>
  )
}

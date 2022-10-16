import { Delete } from "@icon-park/react"

import { Button, Text } from "../../components"
import Form from "../../components/form/Form"
import GroupButton from "../../components/groupButton/GroupButton"
import Input from "../../components/input/Input"
import Info from "../auth/info/Info"

import useSignUp from "../../hooks/useSignUp"
 
export default function SignUp() {
  const {
    refs,
    loading,
    matchPassword,
    validation,
    isConfirmPasswordActive,
    handleChange,
    handleClearForm,
    handleSubmit
  } = useSignUp()

  return (
    <section className="sign">
      <Info />
      <Form onSubmit={handleSubmit} ref={refs.form}>
        <Input
          placeholder="First Name"
          name="firstname"
          onChange={handleChange}
          ref={refs.firstnameRef}
          error={validation.firstname.error}
          errorMessage={validation.firstname.message}
        />
        <Input
          placeholder="Last Name"
          name="lastname"
          onChange={handleChange}
          error={validation.lastname.error}
          errorMessage={validation.lastname.message}
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleChange}
          error={validation.email.error}
          errorMessage={validation.email.message}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
          error={validation.password.error}
          errorMessage={validation.password.message}
        />
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          error={isConfirmPasswordActive && !matchPassword.match}
          errorMessage={validation.confirmPassword.message}
        />
        <GroupButton>
          <Button
            className="continue"
            type="submit"
            loading={loading}
          >
            Sign Up
          </Button>
          <Button
            className="continue helper"
            helper
            loading={loading}
            onClick={handleClearForm}
          >
              <Delete />
          </Button>
        </GroupButton>
        <Text element="p">By clicking the button, you are agreeing to our <span>Terms and Services</span></Text>
      </Form>
    </section>
  )
}

import { Button } from "../../components"
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import useAuthenticate from "../../hooks/useAuthenticate"
 
export default function Authenticate() {
  const { handleClearForm, handleSubmit, loading, form, email } = useAuthenticate()

  return (
    <section className="sign">
      <Form onSubmit={handleSubmit} onFocus={handleClearForm} ref={form}>
        <Input placeholder="Email" name="email" type="email" ref={email} />
        <Button type="submit" loading={loading}>Continue</Button>
      </Form>
    </section>
  )
}

import { AuthProvider } from "../../context/authContext"
import { FormProvider } from "../../context/formContext"
import './Auth.scss'
import Intro from "./intro"
import Sign from "./sign/Sign"

export default function Auth() {
  return (
    <main className="auth">
      <AuthProvider>
        <section className="wrapper">
          <Intro />
          <FormProvider>
            <Sign />
          </FormProvider>
        </section>
      </AuthProvider>
    </main>
  )
}

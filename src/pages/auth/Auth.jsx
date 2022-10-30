import './Auth.scss'
import { Outlet } from "react-router-dom"
import { FormProvider } from "../../context/formContext"
import Intro from "./intro/Intro"

export default function Auth() {
  return (
    <main className="auth">
      <section className="wrapper">
        <Intro />
        <FormProvider>
          <Outlet />
        </FormProvider>
      </section>
    </main>
  )
}

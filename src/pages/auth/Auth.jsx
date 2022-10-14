import { Outlet } from "react-router-dom"
import { FormProvider } from "../../context/formContext"
import './Auth.scss'
import Intro from "./intro"

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

import { Outlet } from "react-router-dom"
import { AuthProvider } from "../../context/authContext"
import { FormProvider } from "../../context/formContext"
import './Auth.scss'
import Intro from "./intro"

export default function Auth() {
  return (
    <main className="auth">
      <AuthProvider>
        <section className="wrapper">
          <Intro />
          <FormProvider>
            <Outlet />
          </FormProvider>
        </section>
      </AuthProvider>
    </main>
  )
}

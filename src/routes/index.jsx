import { createBrowserRouter, Outlet } from 'react-router-dom'
import Layout from "../components/layout/Layout"
import { SummaryProvider } from "../context/summaryContext"
import Auth from "../pages/auth/Auth"
import Authenticate from "../pages/authenticate/Authenticate"
import CSS from "../pages/css/CSS"
import Homepage from "../pages/home/Homepage"
import JavaScript from "../pages/javascript/JavaScript"
import NotFound from "../pages/notfound/NotFound"
import ReactPage from "../pages/react/React"
import SignIn from "../pages/signin/SignIn"
import SignUp from "../pages/signup/SignUp"
import Summary from "../pages/summary/Summary"
import PersistLogin from "./PersistLogin"
import PrivateRoute from "./PrivateRoute"

const SummaryRoutes = ({ Component }) => {
  return (
    <SummaryProvider>
      <Component />
    </SummaryProvider>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Outlet /></Layout>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        element: <PersistLogin />,
        children: [
          {
            element: <PrivateRoute />,
            children: [
              {
                path: 'content',
                element: <SummaryRoutes Component={Summary} />,
              },
              {
                path: 'content/react',
                element: <SummaryRoutes Component={ReactPage} />
              },
              {
                path: 'content/javascript',
                element: <SummaryRoutes Component={JavaScript} />
              },
              {
                path: 'content/css',
                element: <SummaryRoutes Component={CSS} />
              },
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Authenticate />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  }
])

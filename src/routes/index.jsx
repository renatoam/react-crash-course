import { useEffect } from "react"
import { createBrowserRouter, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from "../context/authContext"
import { CardsProvider } from "../context/cardsContext"
import Auth from "../pages/auth/Auth"
import Authenticate from "../pages/authenticate/Authenticate"
import Cards from "../pages/cards/Cards"
import Homepage from "../pages/home/Homepage"
import Luxury from "../pages/luxury/Luxury"
import NotFound from "../pages/notfound/NotFound"
import Sedans from "../pages/sedans/Sedans"
import SignIn from "../pages/signin/SignIn"
import SignUp from "../pages/signup/SignUp"
import Suvs from "../pages/suvs/Suvs"

const CardsRoutes = ({ Component }) => {
  return (
    <CardsProvider>
      <Component />
    </CardsProvider>
  )
}

const PrivateRoute = () => {
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log('Private', user)
    if (!user) {
      return navigate('/auth/signin', { state: { from: location }, replace: true })
    }
  }, [user, location, navigate])

  return (
    <Outlet />
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <><Outlet /></>, // could be a layout instead fragment
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
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
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: 'content',
        element: <CardsRoutes Component={Cards} />,
      },
      {
        path: 'content/sedans',
        element: <CardsRoutes Component={Sedans} />
      },
      {
        path: 'content/suvs',
        element: <CardsRoutes Component={Suvs} />
      },
      {
        path: 'content/luxury',
        element: <CardsRoutes Component={Luxury} />
      },
    ]
  }
])

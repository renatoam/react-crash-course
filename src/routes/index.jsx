import { createBrowserRouter, Outlet } from 'react-router-dom'
import { CardsProvider } from "../context/cardsContext"
import Auth from "../pages/auth/Auth"
import Authenticate from "../pages/authenticate/Authenticate"
import Cards from "../pages/cards/Cards"
import Homepage from "../pages/home/Homepage"
import Luxury from "../pages/luxury/Luxury"
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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <><Outlet /></>,
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
    path: '/cards',
    element: <CardsRoutes Component={Cards} />,
  },
  {
    path: '/sedans',
    element: <CardsRoutes Component={Sedans} />
  },
  {
    path: '/suvs',
    element: <CardsRoutes Component={Suvs} />
  },
  {
    path: '/luxury',
    element: <CardsRoutes Component={Luxury} />
  },
])

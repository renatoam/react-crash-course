import { createBrowserRouter } from 'react-router-dom'
import { CardsProvider } from "../context/cardsContext"
import Auth from "../pages/auth/Auth"
import Authenticate from "../pages/authenticate/Authenticate"
import Cards from "../pages/cards/Cards"
import Luxury from "../pages/luxury/Luxury"
import Sedans from "../pages/sedans/Sedans"
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
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Authenticate />
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

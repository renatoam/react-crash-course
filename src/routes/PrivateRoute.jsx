import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

const PrivateRoute = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!user?.accessToken) {
      return navigate('/auth', { state: { from: location }, replace: true })
    }
  }, [user, location, navigate])

  return (
    <Outlet />
  )
}

export default PrivateRoute

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { useAuthContext } from "../context/authContext"
 
export default function PersistLogin() {
  const { refresh } = useAuthContext()
  const user = useSelector(state => state.user)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!user?.accessToken) {
      refresh()
        .finally(() => setIsLoading(false))
    }
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <Outlet />
    </>
  )
}

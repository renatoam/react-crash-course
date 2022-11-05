import { ToastContainer, toast } from 'react-toastify';
import { createContext, useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const NotificationContext = createContext(null)

export const useNotificationContext = () => useContext(NotificationContext)

export const NotificationProvider = ({ children }) => {
  const notifications = useSelector(state => state.notifications)
  const currentToast = useRef(null)

  const notify = (status, message) => {
    return toast[status](message, { theme: 'colored' })
  }

  useEffect(() => {
    if (notifications) {
      currentToast.current = toast[notifications?.status](notifications?.message, { theme: 'colored' })
    }

    return () => {
      toast.dismiss(currentToast.current)
    }
  }, [notifications])

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  )
}

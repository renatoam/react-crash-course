import { ToastContainer, toast } from 'react-toastify';
import { createContext, useContext } from "react";

export const NotificationContext = createContext(null)

export const useNotificationContext = () => useContext(NotificationContext)

export const NotificationProvider = ({ children }) => {
  const notify = (status, message) => {
    return toast[status](message, { theme: 'colored' })
  }

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  )
}

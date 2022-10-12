import './App.css'
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes"
import { NotificationProvider } from "./context/notificationContext";

export default function App() {
  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  )
}

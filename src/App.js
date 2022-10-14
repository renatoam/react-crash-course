import './App.css'
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes"
import { NotificationProvider } from "./context/notificationContext";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NotificationProvider>
  )
}

import './App.css'
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes"
import { NotificationProvider } from "./context/notificationContext";
import { AuthProvider } from "./context/authContext";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NotificationProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </NotificationProvider>
    </Provider>
  )
}

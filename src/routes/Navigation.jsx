import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import Layout from "../components/layout/Layout"
import Features from "../pages/Features"
import About2 from "../pages/About2"
import Pricing from '../pages/Pricing'
import Getintouch from "../pages/Getintouch"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/about",
        element: <About2 />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/getintouch",
        element: <Getintouch />,
      }
    ],
  },
])

export default function Navigation() {
  return <RouterProvider router={router} />
}
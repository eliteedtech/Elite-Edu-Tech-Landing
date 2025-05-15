import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import Layout from "../components/layout/Layout"
import Features from "../pages/Features"
import About2 from "../pages/About2"

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
      // Add more routes here
    ],
  },
])

export default function Navigation() {
  return <RouterProvider router={router} />
}
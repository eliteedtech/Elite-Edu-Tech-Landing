import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import Layout from "../components/layout/Layout"
import Features from "../pages/Features"
import Pricing from "../pages/Pricing"
import Testimonial from "../pages/Testimonial"
import Institutions from "../pages/Institutions"
import FAQSections from "../pages/FAQSections"
import GetinTouch from "../pages/GetinTouch"
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
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/institutions",
        element: <Institutions />,
      },
      {
        path: "/faq",
        element: <FAQSections />,
      },
      {
        path: "/getintouch",
        element: <GetinTouch />,
      },
      // Add more routes here
    ],
  },
])

export default function Navigation() {
  return <RouterProvider router={router} />
}
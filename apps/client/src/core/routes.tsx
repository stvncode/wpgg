import { ErrorBoundary } from "components/Error"
import { Layout } from "components/Layout"
import { Home } from "pages/Home"
import { Login } from "pages/Login"
import { Navigate, createBrowserRouter } from "react-router-dom"

type RemixRouter = ReturnType<typeof createBrowserRouter>

export const router: RemixRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
])
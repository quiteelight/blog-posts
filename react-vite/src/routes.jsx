import { createBrowserRouter } from 'react-router'
import App from './pages/App'
import Csr from './pages/Csr'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/csr',
    element: <Csr />,
  },
])
import { createHashRouter, Navigate } from 'react-router-dom'
import NavigationLayout from '../components/layouts/NavigationLayout'
import ProjectCatalogPage from '../views/catalog/ProjectCatalogPage'
import WorkflowGuidePage from '../views/catalog/WorkflowGuidePage'

const router = createHashRouter([
  {
    path: '/',
    element: <NavigationLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/catalog" />,
      },
      {
        path: 'catalog',
        element: <ProjectCatalogPage />,
      },
      {
        path: 'workflow',
        element: <WorkflowGuidePage />,
      },
    ],
  },
])

export default router

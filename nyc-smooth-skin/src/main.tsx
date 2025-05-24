import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NavBar } from './components/NavBar.tsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Footer } from './components/Footer.tsx'
import { AboutNails } from './pages/AboutNails.tsx'
import { AboutLaserHairRemoval } from './pages/AboutLaserHairRemoval.tsx'
import { VisitUs } from './pages/VisitUs.tsx'

const Layout =()=> {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/AboutNails",
        element: <AboutNails />,
      },
      {
        path: "/AboutLaserHairRemoval",
        element: <AboutLaserHairRemoval />,
      },
      {
        path: "/VisitUs",
        element: <VisitUs />,
      },
    ]
  }  
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

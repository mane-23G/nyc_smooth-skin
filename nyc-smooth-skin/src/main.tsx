import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NavBar } from './components/NavBar.tsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Footer } from './components/Footer.tsx'
import { AboutNails } from './pages/AboutNails.tsx'
import { AboutLaserProcedures } from './pages/AboutLaserProcedures.tsx'
import { VisitUs } from './pages/VisitUs.tsx'
import { ContactUs } from './pages/ContactUs.tsx'
import { Guide } from './pages/Guide.tsx'
import { FAQ } from './pages/FAQ.tsx'

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
        path: "/AboutLaserProcedures",
        element: <AboutLaserProcedures />,
      },
      {
        path: "/VisitUs",
        element: <VisitUs />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/FAQ",
        element: <FAQ />
      },
      {
        path: "/Guide",
        element: <Guide />
      },

    ]
  }  
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

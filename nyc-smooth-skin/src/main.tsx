import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { NavBar } from './components/NavBar'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Footer } from './components/Footer'
import { AboutNails } from './pages/AboutNails'
import { AboutLaserProcedures } from './pages/AboutLaserProcedures'
import { VisitUs } from './pages/VisitUs'
import { ContactUs } from './pages/ContactUs'
import { Guide } from './pages/Guide'
import { FAQ } from './pages/FAQ'
import { LaserPricing } from './pages/Pricing/LaserPricing'

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
        path: "/Services/Nails",
        element: <AboutNails />,
      },
      {
        // path: "/AboutLaserProcedures",
        path: "/Services/Laser",
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
        path: "/Services/Laser/FAQ",
        element: <FAQ />
      },
      {
        path: "/Services/Laser/Guide",
        element: <Guide />
      },
      {
        path: "/Services/Laser/Pricing",
        element: <LaserPricing />
      },

    ]
  }  
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

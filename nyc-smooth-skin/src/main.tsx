import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { NavBar } from './components/NavBar.js'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Footer } from './components/Footer.js'
import { AboutNails } from './pages/AboutNails.js'
import { AboutLaserProcedures } from './pages/AboutLaserProcedures.js'
import { VisitUs } from './pages/VisitUs.js'
import { ContactUs } from './pages/ContactUs.js'
import { Guide } from './pages/Guide.js'
import { FAQ } from './pages/FAQ.js'
import { LaserPricing } from './pages/Pricing/LaserPricing.js'

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
        path: "/Nails",
        element: <AboutNails />,
      },
      {
        // path: "/AboutLaserProcedures",
        path: "/Laser",
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
        path: "/Laser/FAQ",
        element: <FAQ />
      },
      {
        path: "/Laser/Guide",
        element: <Guide />
      },
      {
        path: "/Laser/Pricing",
        element: <LaserPricing />
      },

    ]
  }  
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

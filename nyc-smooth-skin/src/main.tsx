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
import { LaserPricing } from './pages/Pricing/LaserPricing.tsx'

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

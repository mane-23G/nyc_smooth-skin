import { NavBar } from './components/NavBar'
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import './App.css';
// import { SideBar } from './components/SideBar';
import { useCallback, useState } from "react";
import { Menu} from "lucide-react";
import { X} from "lucide-react";
import { SideBar } from './components/SideBar';
import Logo from './assets/logo1.png'


function App() {

  return (
    <main className='App'>

      {/* Nav Bar */}
      {/* <NavBar /> */}

      {/* Title Name */}
      <div className='titleName'>
        <img src={Logo} className='logo'></img>
        <p>NYC Smooth Skin</p>

      </div>

      {/* Our Services */}
      <Services />

      {/* Footer */}
      <Footer />

    </main>
  );
}

export default App
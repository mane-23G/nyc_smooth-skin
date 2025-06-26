import { Menu} from "lucide-react";
import { SideBar } from "./SideBar";
import { useCallback, useState } from "react";




export function NavBar() {
    
    const [open,openMenu] = useState(false);

    const handleOpen = () => openMenu(true);
    const handleClose = () => openMenu(false);
        
    return (
        <>
            <SideBar isOpen={open} onClose={handleClose}/>
            <div className='navbar'>
                <ul>
                    <li className="menu-sidebar">
                        <Menu size={17} onClick={handleOpen}/>
                    </li>
                    <li>
                        <a href='/' className='menu-link'>Menu</a>
                    </li>
                    <li>
                        <a href='/VisitUs' className='visitus-link'>
                        Visit Us
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
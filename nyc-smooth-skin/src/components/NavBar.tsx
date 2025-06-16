import { Menu} from "lucide-react";


export function NavBar() {
    return (
        <div className='navbar'>
            <ul>
                <li className="menu-sidebar">
                    <Menu size={17} />
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
    )
}
import { X} from "lucide-react";

type SideBarProps = {
    isOpen: boolean;
    onClose: () => void;
}

export function SideBar({isOpen, onClose}: SideBarProps) {
    
    const styles = {
        display: isOpen ? 'block' : 'none'
    };

    return (
        <div className="sideBar" style={styles}>
            <X size={20} strokeWidth={3} className="X" onClick={onClose}/>
            <ul className="sideBar-list">
                <li>
                    <a href="/">Home Page</a>
                </li>
                <li>
                    Services
                    <ul>
                
                        
                        <li>
                            <a href="/Nails">Nails</a>
                        </li>
                        <li>
                            <a href="/Laser">Laser</a>
                            <ul>
                                <li>
                                    <a href="/Laser/Pricing">Pricing</a>
                                </li>
                                <li>
                                    <a href="/Laser/Guide">Guide</a>
                                </li>
                                <li>
                                    <a href="/Laser/FAQ">FAQ</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/ContactUs">Contact Us</a>
                </li>
                <li>
                    <a href="/VisitUs">Visit Us</a>
                </li>
                

            </ul>
        </div>
    );
}
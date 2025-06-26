import { useEffect, useState } from "react";
import classNames from "classnames";
import { ChevronsUp, Menu} from "lucide-react";
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
                    <a href="">Home Page</a>
                </li>
                <li>
                    Services
                    <ul>
                        <li>
                            <a href="">Laser</a>
                            <ul>
                                <li>
                                    <a href="">Pricing</a>
                                </li>
                                <li>
                                    <a href="">Guide</a>
                                </li>
                                <li>
                                    <a href="">FAQ</a>
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            <a href="">Nails</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
                <li>
                    <a href="">Visit Us</a>
                </li>
                

            </ul>
        </div>
    );
}
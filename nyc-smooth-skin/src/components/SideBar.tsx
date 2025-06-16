import { useState } from "react";
import { Menu} from "lucide-react";

export const SideBar = () => {
    const [sidebar,setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sidebar);

    return (
        <>
            
        </>
    )
}
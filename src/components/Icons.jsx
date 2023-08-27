import { IconContext } from "react-icons";
import { FaFolder } from "react-icons/fa";

export function Icons({children, props}){
return(   
<IconContext.Provider value={{ size: 1 }}>
    {children}
</IconContext.Provider>
)}
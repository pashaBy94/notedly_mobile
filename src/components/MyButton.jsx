import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export function MyButton({children, nav}){
const navigate = useNavigation();
return(  
    <Button onPress={()=>{
        navigate.navigate(nav);
    }} title='pp'>
        {children}
    </Button>
)}
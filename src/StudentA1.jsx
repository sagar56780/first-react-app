import { useContext } from "react";
import { QspiderContext } from "./QspiderComponent";

const StudentA1=()=>{
let val=useContext(QspiderContext)
    return (<>

        
        <a href={val}><h1>Qspider Student A1</h1></a>
    
    
                    




    </>)
}
export  default StudentA1;
import { QspiderContext } from "./QspiderComponent";
import StudentA1 from "./StudentA1";
const StudentA=()=>{
    return(
        <>
    <QspiderContext.Consumer>


      
      {(val)=>{
            return<> 
            <a href={val} target="blank" ><h1>Qspiders Student A</h1></a>
                  
            </>

        }}
      
  
    </QspiderContext.Consumer> 
      <StudentA1/>
    </>
    )
}
export default StudentA;
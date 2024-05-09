import { QspiderContext } from "./QspiderComponent";

const StudentB=()=>{
    return(
    <QspiderContext.Consumer>
      {(val)=>{
            return <a href={val} target="blank" ><h1>Qspiders Student B</h1></a>
            

        }}

    </QspiderContext.Consumer>
    )
}
export default StudentB;
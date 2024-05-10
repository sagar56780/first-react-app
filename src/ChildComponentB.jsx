import HOC from "./HOC";

const ChildCompnentB=(props)=>{

    return <>
      <h1> Name : {props.name} </h1> 
      
      <h1>This is child Component B</h1>
    
    </>


}
export default HOC(ChildCompnentB);
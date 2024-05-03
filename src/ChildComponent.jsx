//!===========props===========
/*
const ChildCompnent=(props)=>{
 console.log(props);
    return (
        <>
        <h1>image:{props.image}</h1>
        <h1>Description:{props.discription}</h1>
        <h1>Price{props.price}</h1>
        <h1>Discount{props.discount}</h1>
        <h1>IsAvailable:{props.isavailable===true?"YES":"NO"}</h1>
        <h1>Total Order:{props.totalOrder===null?"NA":props.totalOrder}</h1>
        <h1>Rating:{props.rating===undefined?"NA":props.rating}</h1>
        
        <hr />
             </>
        
    );
}
export default ChildCompnent;
*/

/*
const ChildCompnent=(props)=>{

    return (
        <>
        <h1>I am child component</h1>
          {props.children}

        <hr />    
             </>
        
    );
}
export default ChildCompnent;
*/
/*
//!===========props Distructuring===========

const ChildCompnent=(props)=>{
    console.log(props);
    let{image,discription,price,discount,isavailable,totalOrder,rating}=props;
       return (
           <>
           <h1>image:{image}</h1>
           <h1>Description:{discription}</h1>
           <h1>Price{price}</h1>
           <h1>Discount{discount}</h1>
           <h1>IsAvailable:{isavailable===true?"YES":"NO"}</h1>
           <h1>Total Order:{totalOrder===null?"NA":props.totalOrder}</h1>
           <h1>Rating:{rating===undefined?"NA":props.rating}</h1>
           
           <hr />
                </>
           
       );
   }
   export default ChildCompnent;
*/

//!========Default props=========
/*
const ChildCompnent=(props)=>{
    let{name="no name",age=18,course="JFS",gender="others"}=props;//setting default value for missing v
    return(
    <>
    <h1>Name:{name}</h1>
    <h1>Age:{age}</h1>
    <h1>Course: {course}</h1>
    <h1>Gender:{gender}</h1>
    <hr />
    </>
    );
};
export default ChildCompnent;
*/

//!=========props Drilling===========
import GrandChildComponent from "./GrandChildComponent";
const ChildCompnent=(props)=>{
   console.log("i am child component");
   console.log(props);
    return(
    <>
    <h1> data ={props.data}</h1>
    <h1>I am child component</h1>
    <GrandChildComponent childData={props.data}/>
    

    <hr />
    </>
    );
};
export default ChildCompnent;
   

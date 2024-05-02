//!===========props===========

const ChildCompnent=(props)=>{
 console.log(props);
    return (
        <>
        <h1>image:{props.image}</h1>
        <h1>Description:{props.discription}</h1>
        <h1>Price{props.price}</h1>
        <h1>Discount{props.discount}</h1>
        <h1>IsAvailable:{props.isavailable===true?"YES":"NO"}</h1>
        
        <hr />
             </>
        
    );
}
export default ChildCompnent;


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


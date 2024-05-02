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
   

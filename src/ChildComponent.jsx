//!===========props===========
const ChildCompnent=(props)=>{

    return (
        <>
        <h1>image:{props.image}</h1>
        <h1>Description:{props.discription}</h1>
        <h1>Price{props.price}</h1>
        <h1>Discount{props.discount}</h1>

        <hr /> 
             </>
        
    );
}
export default ChildCompnent;
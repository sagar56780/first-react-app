//!============props drilling============

const GrandChildComponent=(props)=>{
    console.log(" i am grand child component");
    return( <>
        
        <h1>I am grand child component</h1>
        <h1>{props.childData.data}</h1>



    </>
    );

}
export default GrandChildComponent;

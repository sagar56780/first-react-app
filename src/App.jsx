// import React from "react";




// function App(){

//     return <React.Fragment>
//         <h1>hello hi </h1>
//         <h2>hello bye</h2>
//     </React.Fragment>;
// }
// export default App;
/*
//! == Class based Components ===
import React from 'react';

class App extends React.Component{
    render(){
        return <>
        <h1>hii , I am class based component</h1>
        </>
    };
}


*/
//!============Props===============
import ChildCompnent from "./ChildComponent";
const App=()=>{    //sending props - props is addition property passing to a element like we pass values inside input tag in html
    return(
        <>
         <ChildCompnent image="FirstImage" discription="info1" price="100" discount="90%"/> 
         <ChildCompnent image="secondImage" discription="info2" price="500" discount="70%"/>  
         <ChildCompnent image="thirdImage" discription="info3" price="1000" discount="39%"/> 
         <ChildCompnent image="fourthImage" discription="info4" price="1100" discount="50%"/> 
         <ChildCompnent image="fithImage" discription="info5" price="600" discount="80%"/>  

         </>
    );
}
export default App;
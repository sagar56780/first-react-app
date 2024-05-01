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
const App=()=>{     
    return(
         <ChildCompnent image="FirstImage" discription="info1" price="100" discount="90%"/>  // sending props 

    );
}
export default App;
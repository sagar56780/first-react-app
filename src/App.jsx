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
         <ChildCompnent image="FirstImage" discription="info1" price={100} discount={90} /> 
         <ChildCompnent image="secondImage" discription="info2" price={500} discount={80}/>  
         <ChildCompnent image="thirdImage" discription="info3" price={300} discount={39}/> 
         <ChildCompnent image="fourthImage" discription="info4" price={1100} discount={50}/> 
         <ChildCompnent image="fithImage" discription="info5" price={3000} discount={90}/>  

         </>
    );
}
export default App;


/*
//! =========Props Children==========

import ChildCompnent from "./ChildComponent";
const App=()=>{    //sending props - props is addition property passing to a element like we pass values inside input tag in html
    return(
        
        <ChildCompnent>
            <h1>I am first child</h1>
            <h1>I am second child</h1>
            <h1>I am thired child</h1>
            <h1>I am fouth child</h1>

        </ChildCompnent>
        
        
    );
}
export default App;

*/


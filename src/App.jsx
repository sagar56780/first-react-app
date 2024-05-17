// import React from "react";







// import { useRef } from "react";

// import { useState } from "react"





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
/*
import ChildCompnent from "./ChildComponent";
const App=()=>{    //sending props - props is addition property passing to a element like we pass values inside input tag in html
   
    return(
        <>
         <ChildCompnent image="FirstImage" discription="info1" price={100} discount={90} isavailable={true} totalOrder={30} rating={4.6}/> 
         <ChildCompnent image="secondImage" discription="info2" price={500} discount={80} isavailable={false} totalOrder={null} rating={4.2}/>  
         <ChildCompnent image="thirdImage" discription="info3" price={300} discount={39} isavailable={true} totalOrder={50} rating={undefined}/> 
         <ChildCompnent image="fourthImage" discription="info4" price={1100} discount={50} isavailable={false} totalOrder={23} rating={2.3}/> 
         <ChildCompnent image="fithImage" discription="info5" price={3000} discount={90} isavailable={true} totalOrder={null} rating={undefined}/>  
         

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
//!============Props- Destructuring===============
/*
import ChildCompnent from "./ChildComponent";
const App=()=>{    //sending props - props is addition property passing to a element like we pass values inside input tag in html
   
    return(
        <>
         <ChildCompnent image="FirstImage" discription="info1" price={100} discount={90} isavailable={true} totalOrder={30} rating={4.6}/> 
         <ChildCompnent image="secondImage" discription="info2" price={500} discount={80} isavailable={false} totalOrder={null} rating={4.2}/>  
         <ChildCompnent image="thirdImage" discription="info3" price={300} discount={39} isavailable={true} totalOrder={50} rating={undefined}/> 
         <ChildCompnent image="fourthImage" discription="info4" price={1100} discount={50} isavailable={false} totalOrder={23} rating={2.3}/> 
         <ChildCompnent image="fithImage" discription="info5" price={3000} discount={90} isavailable={true} totalOrder={null} rating={undefined}/>  
         

         </>
    );
}
export default App;
*/
/*
import ChildCompnent from "./ChildComponent";
const App=()=>{    //sending props - props is addition property passing to a element like we pass values inside input tag in html
   console.log(ChildCompnent);
    return(
        <>
         <ChildCompnent name="shivam Chauhan" age={25} course="node js" /> 
         <ChildCompnent name="Daksh" course="node js" gender="male" /> 
         <ChildCompnent name="vinay" age={25}  gender="male" /> 

    

         </>
    );
}
export default App;
*/

//!========props drilling========
/*
import ChildCompnent from "./ChildComponent";

const App=()=>{
    console.log("I am parent ");
    return(
        <>

        
        <ChildCompnent data="this data from parent componnet"/>


        </>
    )
}
export default App;
*/


//!=================status hooks==========
/*
//?example 1
import { useState } from "react";

const App=()=>
{
    let[status,setStatus]=useState("single");
    return(
        <>
        <h1>Status: {status}</h1>
        <button onClick={()=>
        {
            setStatus("married")
        }}> change status </button>
        </>
    )

}
export default App;
*/
// //?example 2
// import { useState } from "react";

// const App=()=>
// {
//     let[status,setStatus]=useState("single");
//     return(
//         <>
//         <h1>Status: {status}</h1>
//         <button onClick={()=>
//         {
//             setStatus("single")
//         }}> Single</button>
//         <button onClick={()=>{
//             setStatus("maried")
//         }}> Married</button>
//         </>
//     )

// }
// export default App;
/*
//?example 3
import { useState } from "react";

const App=()=>
{
    let[status,setStatus]=useState("nidhi");
    return(
        <>
        <h1>Status: {status}</h1>
        <button onClick={()=>
        {
            setStatus("nidhi chauchan")
        }}>  Full name </button>
        </>
    )

}
export default App;
*/
/*
import { useState } from "react";

const App=()=>
{
    let[status,setStatus]=useState("Single");
    return(
        <>
        <h1>Status: {status}</h1>
       
        <button onClick={(status)=>
        { 
            <h1>{status }</h1>
            if(status)
            {
                setStatus("Married")
            }
            else{
                setStatus("Single")
            }
            
        }}>  change Status </button>
        </>
    )

}
export default App;

*/
/*
//!=================task for the day=========
import { useState } from "react"; 

const App=(()=>{

   
    let[javaList,printjava]=useState(['html','css','java-script','python']);
   
    return(
        <>
        <ul>
        {javaList.map((val,ind)=>{
            return <li>{val}</li>
        })}
        

        </ul>

         <button onClick={()=>{


            printjava(['html','css','java-script','java','spiring-boot','hibernate','jdbc'])


        }}>print java full stack skills</button>
    
        
        
        
        
        
        
    
        
        
        </>

         
        


    )




})

export default App;
*/
//!==================task 2============
/*
import { useState } from "react";

const App=()=>
{
    let[gender,changeGeneder]=useState(true);
    var changegen=()=>{
        return changeGeneder(!gender);
    }

    return(

        <>
            <h1>Change Gender : {gender?"male":"female"}</h1>
       
         <button onClick={changegen}>{gender?"female":"male"}</button>
        </>
    )

}
export default App;

*/
/*
//!==============task 3=================
 import React,{useState} from "react"
const App=()=>{
    let[obj,changeObj]=useState({
        name:"shubam",
        age:"34",
        gender:"male"

    })
    var changevalue=()=>{
        return changeObj({
            name:"sagar",
        age:"24",
        gender:"male"

        })
    }
    return(
        <>
        <h1>Name:{obj.name}</h1>
        <h1>Age: {obj.age}</h1>
        <h1>Gender:{obj.gender}</h1>
        <button onClick={changevalue}> Change values</button>
        


        </>
        )

}
export default App;
*/

//!============Context API==========//

/* 
step 1. create Context
step 2. provider
step 3. consumer


import React,{createContext} from "react";
import ChildCompnentA from "./ChildComponentA";


export let MyContext=createContext();
let student={
     name:"sumit",
     age:34,
     skills:["web","java","jdbc"]
}

const App=()=>{

    return<>
    <MyContext.Provider value={student} >
            <ChildCompnentA></ChildCompnentA>
    </MyContext.Provider>
    </>
}
export default App;
*/
/*
//!===============Higer Order Component========
/*

import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";




const App=()=>{
    return <>
       
        
        <ChildComponentA  age ={34}/>
        <ChildComponentB age={45}/>
   

    </>
}
export default App;
*/
//!============conditional Render ===========
//? Example 1 by using  if else 
/*
import { useState } from "react";

const App=()=>{
    let[condition,changeCondition]=useState(true);
    let handleCondition=()=>{
        changeCondition(!condition);
    }
    if(condition)
        {
            return<>
                    <h1>HTML</h1>
                    <button onClick={handleCondition}>Change Condition</button>
            </>
            
            
        }
        else{
            return<>
            <h1>Hyper Text Markup Language</h1>
            <button onClick={handleCondition}>Change Condition</button>
    </>

        }

}
export default App;
*/
/*
//?Exapmle 2 using ternery Operater
import { useState } from "react";

const App=()=>{
    let[condition,changeCondition]=useState(true);
    let handleCondition=()=>{
        changeCondition(!condition);
    }
     
    return <>
            <h1>
                {condition?"HTML":"Hyper Text Markup Language"}
                <button onClick={handleCondition}></button>
            </h1>
    </>
   

}
export default App;
*/
//!===========useRef===========
/*

const App=()=>{
    let nameRef=useRef();
    let emailRef=useRef();
    console.log(nameRef.current);
    console.log(emailRef.current);

    let handleForm=(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value,emailRef.current.value);
        
    }

    
    return<>
    <form onSubmit={handleForm} >
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" ref={nameRef} /><br></br><br /><br />
        <label htmlFor="email" >Email: </label>
        <input type="email"id="email" ref={emailRef} /><br /><br />
          <button type="Submit">Submit</button>
        
 

   </form>
    </>
}
export default App;
*/
/*
//!============task Calculator using useRef===========
/*
import { useRef } from "react";

const App=()=>{
    
    let input1Ref=useRef();
    let input2Ref=useRef();
    let plusRef=useRef();
    let minusRef=useRef();
    let divideRef=useRef();
    let mulRef=useRef();
        
        


    let result=(e)=>{
        e.preventDefault();
         let a=input1Ref.current.value;
         let b=input2Ref.current.value;
      

         console.log(parseInt(a)+parseInt(b));
         
      
        

       
    }

    return(
    <>

      
        <form action="" onSubmit={result}>
            <label htmlFor="display">Result</label>
        <input type="display" />    <br /><br />
        <div className="calculator">
                <label htmlFor="input1">Input 2</label><br /><br />
                 <input type="text" ref={input1Ref} id="input1" /> <br /><br />
                 <label htmlFor="input2">Input 1</label><br /><br />
                 <input type="text" ref={input2Ref} id="input2" />
            
        </div>
        <div>   <button ref={plusRef}>+</button>
                <button ref={minusRef}>-</button>
                <button ref={divideRef}>/</button>
                <button ref={mulRef}>X</button><br /> <br />
                <button type="submit">=</button>
        </div>
        </form>
      

    
    
    </>
    ) 
}

export default App;
*/
//!=================Controlled Forms=================
/*

const App=()=>{


    let[name,setName]=useState("");
    let[email,setEmail]=useState("");

    let[password,setPassword]=useState("");

    let handleName=(e)=>{


        setName(e.target.value);
    }
    let handleEmail=(e)=>{


        setEmail(e.target.value);
    }
    let handlePassword=(e)=>{


        setPassword(e.target.value);
    }

    let handleSubmit=(e)=>{
        e.preventDefault();

        console.log(
            {
                userName: name,
                userEmail:email,
                userPassword:password
            }
        );
    }

    return(<>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" value={name} onChange={handleName}></input>
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text" value={email} onChange={handleEmail}></input>
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="text" value={password} onChange={handlePassword}></input>
            </div>

            <button>Submit</button>


        </form>
        
    
    </>)



}
export default App;
*/

//? Example 2
/*

const App=()=>{

    let[formData,setFromData]=useState({
        name:"",
        girlFriendname:"",
        email:"",
        password:""
    });

    let{name,girlFriendname,email,password}=formData;
    let handleChange=(e)=>{
        let{name,value}=e.target;

        setFromData({
            ...formData,[name]:value
        });
        console.log(formData);
    }
    return(<>

        <form action="">
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">GirlFriendName</label>
                <input type="text" name="girlFriendname" value={girlFriendname} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" name="password" value={password} onChange={handleChange} />
            </div>

            <button>Submit</button>
        </form>
    </>)
}
export default App;

*/
//!================= life Cycle Methods================
//? ===========class based Component=======
/*
import React,{Component} from "react";
class App extends Component{
    state={counter:0};
    render(){
        return(
            <>
            <h1> I am class based Component</h1>
            <h1>{this.state.counter}</h1>
            <button onClick={()=>{
                this.setState({counter:this.state.counter+1})
            }}> Increment</button>
            <button onClick={()=>{
                this.setState({counter:0})
            }}> reset</button>
            <button onClick={()=>{
                this.setState({counter:this.state.counter+1})
            }}> Decreament</button>
            
            
            
            </>
        )
    }
}
export default App;
*/
//! ============Mounting phase ========
/*
 It is a process of creating an instance of component and rendering into the dom is called Mounting Phase.
 Mounting phase method are:
        ? 1. constructor():
            This is first method to run in the mounting phase.
            It is the best place to do all the intializations.
            This method will execute only once befoe the instance rendered.
            Do not make any side effects. Ex: Http requests.

        ? 2. getDrivedStateFromProps():
            It will run just before the render() method. 
            It will receive the props and states as parameters.
            It will return a new state.
            It must return an Object/null
            It must be static. It will get the proops and states which was belongs to current component . and cannot be accessed by their instances.
            Do not make any side effects. Ex: Http requests.
        ? 3. render():
            It will run on each update.
            It is the only mandatory method in CBC.
            Do not make any side effects. Ex: HTTP requests 
        ? 4. componentDidMount():
            It will run after the render() method.
            It will run only once.
            So, It is the best place to make api requests/ side effects.
 */
/*

const { Component } = require("react");

class App extends Component{

    constructor(props){
        console.log(props);
        console.log("I am constructor() method");
        super(props);
        this.state={counter:0};
    }
 
   static  getDerivedStateFromProps(props,prevState){
    console.log("I am in getDerived state");
    return null

    }

    async componentDidMount(){
      
        let res=await fetch("https://fakestoreapi.com/products/");
        let data=await res.json();
        console.log(data);
        console.log("I am componentDidMount()");
    }

    render(){
        console.log("In render method()");
        return(<>
         <h1>
            I am in class based component
         </h1>
         <h1>{this.stat
            e.counter}</h1>
         <button onClick={()=>{
            this.setState({counter:this.state.counter+1})
         }}></button>

            
        </>)



    }

}
export default App;
*/
//!=========Updating phase =========

/*
  ? 1.  getDrivedStateFromProps():
            It will run just before the render() method. 
            It will receive the props and states as parameters.
            It will return a new state.
            It must return an Object/null
            It must be static. It will get the proops and states which was belongs to current component . and cannot be accessed by their instances.
            Do not make any side effects. Ex: Http requests.
  ? 2.  shouldComponentUpdate():
            This method will work just before the render() mehod.
            Based on shouldComponentUpdate() output, React will decide to render or not.
            It accepts  w parameters - prevProps, prevState.
            It must return a boolean value.
            By default it returns True.

  ? 3.  render():
            It is just similar to render() method of Mounting Phase.
   
  ? 4.  getSnapShotBeforeUpdate():
            It will keep a track of state variables.
            It have to return a state/ null.
            It will work along with componnentDidUpdate() method.
            The returned value of getSnapShotBeforeUpdate() is passed to componnentDidUpdate() as snapshot.
  ? 5.  componentDidUpdate():
            It will run after the getSnapShotBeforeUpdate() method.
            It will get props , states and snapshot as parameters.
            It is the best place to do side effects. like PUT/PATCH requests.

*/

const { Component } = require("react");

class App extends Component{

    constructor(props){
        console.log(props);
        console.log("I am constructor() method");
        super(props);
        this.state={counter:0};
    }
 
   static  getDerivedStateFromProps(props,prevState){
    console.log("I am in getDerived state");
    return null

    }
    shouldComponentUpdate(){
        console.log("i am from shouldComponentUpdate() method");
        return true;
    }

    componentDidMount(){
        console.log("I am componentDidMount()");
        
    }

    render(){
        console.log("In render method()");
        return(<>
         <h1>
            I am in class based component
         </h1>
         <h1>{this.state.counter}</h1>
         <button onClick={()=>{
            this.setState({counter:this.state.counter+1})
         }}></button>

            
        </>)



    }

}
export default App;

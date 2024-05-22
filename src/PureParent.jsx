//!==========Pure component=========


/*
        -> if there is any change in PureChild it will render else not
        -> RegularChild alwyas render either any change in it or not


*/

import { Component } from "react";
import RegularChild from "./RegularChild";
import PureChild from "./PureChild";




class PureParent extends Component{
    constructor(props)
    {
        super(props);
        this.state={conter:0}

    }
    render(){
        return<>
        <h1>Counter value:{this.state.conter}</h1>

        <button onClick={()=>{
            this.setState({conter:this.state.conter+1})
        }}>Update</button>
    <RegularChild></RegularChild>
    <PureChild></PureChild>
        
        
        </>
    }
}
export default PureParent;
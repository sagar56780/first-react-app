//!===========Pure Component========



import React,{PureComponent} from "react";


class PureChild extends PureComponent{
    constructor(props){
        super(props)
        this.state={conter:0}
        

    }
    render(){
        console.log("I am from Pure child compponet");
        return(<>
            <h1>Counter : {this.state.conter}</h1>
            <div >PureChild Component</div>
            <button onClick={()=>{
                this.setState({conter:this.state.conter+1})
            }}>Update pure child</button>
            </>
        )
    }
}
export default PureChild;
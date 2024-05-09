import { MyContext } from "./App";

const ChildCompnentA=()=>{

    return( <>

        <MyContext.Consumer>
            {(val)=> <h1>{val}</h1>}
        </MyContext.Consumer>


    </>
    )

}
export default ChildCompnentA;
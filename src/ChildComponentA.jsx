import { MyContext } from "./App";


const ChildCompnentA=()=>{

    return( <>

        <MyContext.Consumer>
             {({name,age,skills})=>{
               return<>
                <h1>Name : {name}</h1>
                <h1>Age: {age}</h1>
                <h1>Skills:{skills.map((val)=>{
                        return val +" ";
                })}</h1>

                
               </>
                

             }}
        </MyContext.Consumer>


    </>
    )

}
export default ChildCompnentA;
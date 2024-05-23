
const Portal=(props)=>{

    return <>
       <section>
        I will open with Portal 
        <button onClick={props.handelOpen2}>Open</button>
        {props.isOpen2?<h1>I am form Portal component <button onClick={props.handelClose2}>close</button></h1>:null}
     </section>
        </>

}
export {Portal};

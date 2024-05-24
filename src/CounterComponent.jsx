
import React from 'react'

const CounterComponent = (props) => {
  console.log(props.children);
  return (

    <div><h1>{props.children}-{props.data}</h1></div>
  )
}

export default React.memo(CounterComponent);
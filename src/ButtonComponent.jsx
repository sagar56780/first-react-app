import React from 'react'

const ButtonComponent = (props) => {
  console.log(props.children);
  return (
     <button onClick={props.fn}>{props.children}</button>
  )
}

export default React.memo(ButtonComponent)
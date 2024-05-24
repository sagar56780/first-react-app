import React from 'react'

const Title = (props) => {
  console.log("Title");
  return (
    <div><h1>{props.children}</h1></div>
  )
}

export default React.memo(Title);
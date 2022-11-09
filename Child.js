import React from 'react'
const Child = (props) => {
     return (
    <div>
 
  <button onClick={()=>props.sum()}>click</button>
    </div>
  )
}

export default Child;

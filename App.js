import React from 'react';
import Child from './Child';
import {useState,useEffect}from 'react';
 function App() {
  const sum=()=>{
    alert (100+200)
  }
  // const[count,setCount]=useState(0)
  // useEffect(()=>
  //   console.log(count)
   
  // )
  
  return (
    <div>
{/* <button onClick={()=>setCount(count+1)}>click</button>
<h1>{count}</h1> */}
< Child sum={sum}/>
    </div>
  )
}
export default App;
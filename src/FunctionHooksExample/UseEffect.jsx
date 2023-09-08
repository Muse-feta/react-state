// use effect used to use the lifcycle methods in functional based components
import React, { useState, useEffect } from "react";

function UseEffect() {


  let [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `count: ${count}`
  },[] )


  return (
    <div>
      <h1>{count} </h1>
            <button onClick={()=> setCount((count)=> count + 2)}>Add</button>
    </div>
  )
}

export default UseEffect
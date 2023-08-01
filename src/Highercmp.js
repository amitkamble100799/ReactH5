import React, { useState } from 'react'

function Highercmp(Wrapp) {
    const Highercmp2=()=>{
        const [count,setCount]=useState(0);
        const increment=()=>{
            setCount(count+1);
        }
        return <Wrapp count={count} increment={increment}/>
    }
  return Highercmp2;
}
export default Highercmp
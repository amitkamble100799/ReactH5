import React from 'react'
import HigherComp from './Highercmp'

function Clkcmp({count, increment}) {
  return (
    <div className='FirstLeft'>
        <h1 className='H1'>Click To Increese <span className='dg'>{count}</span></h1>
        <div>
          <button className='btn' onClick={increment}>increment</button>
        </div>
    </div>
  )
}

export default HigherComp(Clkcmp)
import React from 'react'
import Highercmp from './Highercmp'

function Overcmp({count, increment}) {
  return (
    <div className='FirstRight'>
      <h1 className='H1'>Mouse Hovering <span className='dg'>{count}</span>  </h1>
      <div >
        <button onMouseOver={increment} className='btn'>Mouse Hover </button>
      </div>
    </div>
  )
}

export default Highercmp(Overcmp)
import React, { PureComponent} from 'react'

export default class Purecmp extends PureComponent {
  constructor(){
    super()
    this.state={
      count: 0
    }
  }

  Click=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1 className='H1'>This is pure componet<span className='dg'>{this.state.count} </span></h1>
        <button onClick={()=>{this.Click() }} className='btn'>Purecmp</button>
      </div>
    )
  }
}
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            message: 'Hello Buddy'
        }
        // this.clickkaro = this.clickkaro.bind(this)
    }
    // clickkaro() {
    //     this.setState(
    //         {
    //            message:'Good bye !' 
    //         }
    //     )
    // }
    clickkaro = () =>
    {
        this.setState(
            {
             message:'Good Bye Bro See You Soon!'
            }
        )
        }
  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.clickkaro.bind(this)}>Click Button</button> */}
            <button onClick={this.clickkaro}>Click Button</button>
            {/* <button onClick={()=>this.clickkaro()}>Click Button</button> */}
      </div>
    )
  }
}

export default EventBind
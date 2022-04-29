import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        
        if (this.state.isLoggedIn) {
            message=<div>We-come Toshnav</div>
        } else {
            message=<div>We-come guest</div>
        }
        return <div>{message}</div>

  }
}


export default UserGreeting
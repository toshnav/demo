import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
    console.log('Cliked The butrton')
}
  render() {
    return (
        <div>
            <button onClick={this.clickHandler}>Click  Me TOO</button>
      </div>
    )
  }
}

export default ClassClick
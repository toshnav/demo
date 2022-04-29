import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          username: '',
          comments: '',
          topic:'react'
        }
    }
    handelUsernameChange = event => {
        this.setState(
            {
                username:event.target.value
            }
        )
        
    }
    handelCommentsChange = (event) => {
        
        this.setState(
            {
                comments:event.target.value
            }
        )
        
    }
    handelTopicChnage= (event) =>
    {
        this.setState({
            topic:event.target.value
        })

    }
    
    handelSubmit = event =>
    {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
        }
    render() {
      const {username,comments,topic} = this.state
    return (
      
        <form onSubmit={this.handelSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={username} onChange={this.handelUsernameChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handelCommentsChange}></textarea>
            </div>

            <div>
                <label>Topic </label>
                <select value={topic} onChange={this.handelTopicChnage}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>

            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form
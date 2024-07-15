import React, {Component} from "react"

class FormThis extends Component {

    constructor(props){
        super(props)

        this.state ={
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentsChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handleTopicChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = e => {
        alert(`${this.state.username}  ${this.state.comments}  ${this.state.topic}`)
        e.preventDefault();
    }

    render() {
        //const {username, topic, comments} = this.state
        return(
            <form>
                <div>
                    <label>Username: </label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comments: </label>
                    <textarea type="text" value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                   <label>Topic: </label>
                   <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="raect">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                   </select>
                </div>
                <div>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}
export default FormThis;
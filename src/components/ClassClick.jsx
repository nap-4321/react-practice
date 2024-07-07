import { Component } from "react";

class ClassClick extends Component {

    clickHandler(){
        console.log("Clicked the button")
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}
export default ClassClick
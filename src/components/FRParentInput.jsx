import { Component } from "react";
import FRInput from "./FRInput";
import React from "react";

class FRParentInput extends Component{
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    clickHndler = () =>{
        this.inputRef.current.focus();
    }
    render() {
        return(
            <div>
                <FRInput ref= {this.inputRef}/>
                <button onClick={this.clickHndler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
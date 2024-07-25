import React, { Component, PureComponent } from "react";
import PureComp from "./PureComponent";
import RegComp from "./RegComp";
import MemoComp from "./MemoComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nap",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Nap",
      });
    }, 2000);
  }

  render() {
    console.log(
      "**********************Parent Comp render****************************"
    );
    return (
      <div>
        Parent Comp
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;

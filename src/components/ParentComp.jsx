import React, { Component } from "react";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nap",
    };
  }

  componentDidMount() {}

  render() {
    return <div>Parent Comp</div>;
  }
}

export default ParentComp;

import React, { Component } from "react";
import EditProduct from "./EditProduct";

class Temlayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <EditProduct dataEdit2={this.props.dataEdit1} />
      </div>
    );
  }
}

export default Temlayout;

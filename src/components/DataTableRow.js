import React, { Component } from "react";

class DataTableRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.no}</td>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>
          <button
            onClick={() => {
              this.props.showDataEdit2();
            }}
          >
            Edit
          </button>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}

export default DataTableRow;

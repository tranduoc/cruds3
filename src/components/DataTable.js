import React, { Component } from "react";
import DataTableRow from "./DataTableRow";

class DataTable extends Component {
  constructor(props) {
    super(props);
  }
  showInfo = () => {
    return this.props.data.map((item, index) => {
      return (
        <DataTableRow
          key={index}
          no={index}
          id={item.id}
          name={item.name}
          showDataEdit2={() => {
            this.props.showDataEdit1(item);
          }}
        />
      );
    });
  };

  render() {
    return (
      <section className="tableProduct">
        <table>
          <tr>
            <th>no</th>
            <th>product id</th>
            <th>product name</th>
            <th>action</th>
          </tr>
          <tbody>{this.showInfo()} </tbody>
        </table>
      </section>
    );
  }
}

export default DataTable;

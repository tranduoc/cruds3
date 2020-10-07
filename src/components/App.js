import React, { Component } from "react";

import "./../App.css";
import Header from "./Header";

import DataTable from "./DataTable";
import data from "./data.json";
import Temlayout from "./Temlayout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      dataEdit: {},
    };
  }

  showDataEdit = (product) => {
    this.setState({
      dataEdit: product,
    });
  };
  render() {
    return (
      <div className="content">
        <Header />
        <Temlayout dataEdit1={this.state.dataEdit} />
        <DataTable
          data={this.state.data}
          showDataEdit1={(product) => {
            this.showDataEdit(product);
          }}
        />
      </div>
    );
  }
}

export default App;

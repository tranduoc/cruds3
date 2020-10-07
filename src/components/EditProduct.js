import React, { Component } from "react";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.dataEdit2.id,
      name: this.props.dataEdit2.name,
    };
  }

  render() {
    console.log(this.state);
    return (
      <section className="formEdit">
        <form action>
          <input
            defaultValue={this.props.dataEdit2.id}
            type="text"
            name="idproduc"
            placeholder="idproduct"
          />
          <input
            defaultValue={this.props.dataEdit2.name}
            type="text"
            name="nameproduct"
            placeholder="idproduct"
          />
          <button>Update</button>
        </form>
      </section>
    );
  }
}

export default EditProduct;

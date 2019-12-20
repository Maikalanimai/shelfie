import React from "react";

class Product extends React.Component {
  render() {
    const {id} =this.props.id
    return (
      <div key={id}>
        <img src={this.props.img} alt={`product ${this.props.index}`} />
        <h3>Product: {this.props.name}</h3>
        <h4>Price: ¥{this.props.price}</h4>
        <button onClick={() =>this.props.delete(id)}>Delete</button>
        <button onClick={() => this.props.toggleEditFn(id)}>Edit</button>
      </div>
    );
  }
}

export default Product;


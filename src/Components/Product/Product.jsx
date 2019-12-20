import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div key={this.props.id}>
        <img src={this.props.img} alt={`product ${this.props.index}`} />
        <h3>Product: {this.props.name}</h3>
        <h4>Price: ¥{this.props.price}</h4>
        <button onClick={() =>this.props.delete(this.props.id)}>Delete</button>
        <button onClick={() => this.props.toggleEditFn()}>Edit</button>
      </div>
    );
  }
}

export default Product;


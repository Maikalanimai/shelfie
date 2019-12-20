import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.inventory.map((e, i) => {
          return (
            <Product
            toggleEditFn={this.props.toggleEditFn}
              delete={this.props.delete}
              id={e.id}
              name={e.name}
              img={e.img}
              price={e.price}
              index={i}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;

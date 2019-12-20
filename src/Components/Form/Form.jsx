import React, { Component } from "react";
import axios from "axios";
import './Form.css'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      img: "",
      id: 0
    };
  }
  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }
  clear() {
    this.setState({
      name: "",
      price: 0,
      img: ""
    });
    if (this.props.editToggled === true) {
      this.props.toggleEditFn();
    }
  }

  post() {
    axios
      .post("/api/inventory", {
        name: this.state.name,
        price: this.state.price,
        img: this.state.img
      })
      .then(res =>
        this.setState({
          postReturn: res
        })
      );
    this.props.updateInventory();
    this.clear();
  }

  update = () => {axios
      .put(`/api/inventory/${this.props.toggleId}`, {
        name: this.state.name,
        price: this.state.price,
        img: this.state.img
      })
      .then(() => this.props.updateInventory());
  };

  findInvIndex = () => {this.props.inventory.findIndex(e=> e.id = this.props.id)}

  sitRender() {
    let toggle = this.props.editToggled;
    if (toggle === false) {
      return (
        <div className={'form'}>
          <img src={this.state.img} alt="Your product" />
          <input
            className="url"
            onChange={e => this.handleChange(e, "img")}
            placeholder="Image URL"
            type="text"
            value={this.state.img}
          />
          <input
            className="productName"
            onChange={e => this.handleChange(e, "name")}
            placeholder="Product Name"
            type="text"
            value={this.state.name}
          />
          <input
            className="productPrice"
            onChange={e => this.handleChange(e, "price")}
            placeholder="Price"
            type="number"
            value={this.state.price}
          />
          <div className={'buttons'}>
          <button onClick={() => this.clear()}>Cancel</button>

          <button onClick={() => this.post()}>Add to Inventory</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className={'form'}>
            
          <img src={this.state.img} alt="Your product" />
          <input
            className="url"
            onChange={e => this.handleChange(e, "img")}
            placeholder="Image URL"
            type="text"
            value={this.state.img}
          />
          <input
            className="productName"
            onChange={e => this.handleChange(e, "name")}
            placeholder="Product Name"
            type="text"
            value={this.state.name}
          />
          <input
            className="productPrice"
            onChange={e => this.handleChange(e, "price")}
            placeholder="Price"
            type="number"
            value={this.state.price}
          />
          <div className={'buttons'}>
          <button onClick={() => this.clear()}>Cancel</button>
          <button onClick={() => this.update()}>Update</button>
          </div>
        </div>
      );
    }
  }
  render() {
    return <div>{this.sitRender()}</div>;
  }
}

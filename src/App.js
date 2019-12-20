import React from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";
import axios from "axios";
import Header from "./Components/Header/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      editToggled: false,
    };
    this.delete = this.delete.bind();
    this.toggleEditFn = this.toggleEditFn.bind();
  }

  componentDidMount() {
    axios.get("/api/inventory").then(res =>
      this.setState({
        inventory: res.data
      })
    );
  }

  updateInventory = () => {
    axios.get("/api/inventory").then(res =>
      this.setState({
        inventory: res.data
      })
    );
  };

  delete = id => {
    return axios
      .delete(`/api/inventory/${id}`)
      .then(res => this.updateInventory());
  };
  toggleEditFn = () => {
    if (this.state.editToggled === false) {
      this.setState({
        editToggled: true
      });
    } else {
      this.setState({
        editToggled: false
      });
    }
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.updateInventory()}>devtools</button>
        <Header />
        <Form updateInventory={this.updateInventory} />
        <Dashboard
          toggleEditFn={this.toggleEditFn}
          delete={this.delete}
          inventory={this.state.inventory}
        />
      </div>
    );
  }
}

export default App;

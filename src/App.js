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
      toggleId: null,
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
  toggleEditFn = (id) => {
    if (this.state.editToggled === false) {
      this.setState({
        editToggled: true,
        toggleId: id
      });
    } else {
      this.setState({
        editToggled: false,
        toggleId: null
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Header />
        <main>
        <Dashboard
          toggleEditFn={this.toggleEditFn}
          delete={this.delete}
          inventory={this.state.inventory}
        />
        <Form inventory={this.state.inventory}
        editToggled={this.state.editToggled}
        toggleEditFn={this.toggleEditFn}
        updateInventory={this.updateInventory}
        toggleId={this.toggleId} />
        </main>
      </div>
    );
  }
}

export default App;

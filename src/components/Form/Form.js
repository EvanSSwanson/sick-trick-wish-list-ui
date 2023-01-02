import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: "",
      name: "",
      obstacle: "",
      tutorial: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  confirmTrick = (event) => {
    event.preventDefault();
    const newTrick = { id: Date.now(), ...this.state };
    this.props.addTrick(newTrick);
    this.resetInputs();
  };

  resetInputs = () => {
    this.setState({ stance: "", name: "", obstacle: "", tutorial: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="name"
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          name="stance"
          value={this.state.stance}
          placeholder="stance"
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          name="obstacle"
          value={this.state.obstacle}
          placeholder="obstacle"
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          name="tutorial"
          value={this.state.tutorial}
          placeholder="tutorial"
          onChange={(event) => this.handleChange(event)}
        />
        <button className="send-it" onClick={(event) => this.confirmTrick(event)}>
          SEND IT
        </button>
      </form>
    );
  }
}

export default Form;
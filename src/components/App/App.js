import { Component } from 'react';
import Tricks from '../Tricks/Tricks';
import Form from "../Form/Form";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [],
      error: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({ error: true })
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ tricks: data }))
      .catch(error => console.log(error));
  }

  postTrick = (newTrick) => {
    const request = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTrick),
    };
    fetch('http://localhost:3001/api/v1/tricks', request)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  addTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick] });
  };

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <div className="trick-form">
          <Form addTrick={this.addTrick} postTrick={this.postTrick}/>
        </div>
        <Tricks tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;
import { Component } from 'react';
import Tricks from '../Tricks/Tricks';
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

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;
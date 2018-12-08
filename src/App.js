import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: 'Default'
  }

  setValue = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.value} onChange={this.setValue} />
      </div>
    );
  }
}

export default App;

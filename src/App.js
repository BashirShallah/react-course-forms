import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: 'Default',
    selectVal: "2",
  }

  setValue = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  setSelectValue = (event) => {
    this.setState({
      selectVal: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.value} onChange={this.setValue} />
        <hr />
        <textarea value={this.state.value} onChange={this.setValue} />
        <hr />
        <select value={this.state.selectVal} onChange={this.setSelectValue}>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
      </div>
    );
  }
}

export default App;

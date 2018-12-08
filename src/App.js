import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: 'Default',
    selectVal: "2",
    checked: true,
    radioValue: "2"
  }

  setValue = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    let value = '';

    if(type == 'checkbox')
      value = event.target.checked;
    else
      value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <input name="value" value={this.state.value} onChange={this.setValue} />
        <hr />
        <textarea name="value" value={this.state.value} onChange={this.setValue} />
        <hr />
        <select name="selectVal" value={this.state.selectVal} onChange={this.setValue}>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
        <hr />
        <label>CheckBox
          <input name="checked" type="checkbox" checked={this.state.checked} onChange={this.setValue} />
        </label>
        <hr />
        <div onChange={this.setValue}>
          <input name="radioValue" type="radio" value="1" checked={this.state.radioValue == '1'} /> One
          <input name="radioValue" type="radio" value="2" checked={this.state.radioValue == '2'} /> Two
        </div>
      </div>
    );
  }
}

export default App;

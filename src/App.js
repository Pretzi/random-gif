import React, { Component } from 'react';
import { FormGroup } from "@blueprintjs/core";
import Input from './components/common/input/Input';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      timer: 0
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h2 className="App__title">Search Random Gifs</h2>

          <FormGroup label="Gif Category">
            <Input 
              value={this.state.category} 
              onChange={e => this.handleInputChange(e)}
              placeholder="Tacos"
              type="search"
              name="category"
              icon="pt-icon-search"
            /> 
          </FormGroup>

          <FormGroup label="Timer">
            <Input 
              value={this.state.timer} 
              onChange={e => this.handleInputChange(e)}
              placeholder="10 seconds"
              name="timer"
              type="number"
              icon="pt-icon-time"
            /> 
          </FormGroup>

        </div>
      </div>
    );
  }
}

export default App;
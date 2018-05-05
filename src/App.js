import React, { Component } from 'react';
import { FormGroup, Button } from "@blueprintjs/core";
import Input from './components/common/input/Input';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      timer: 0,
      numberOfImages: 3
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit() {

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
              type="string"
              name="category"
              icon="pt-icon-tag"
            /> 
          </FormGroup>

          <FormGroup label="Number Of Images">
            <Input 
              value={this.state.numberOfImages} 
              onChange={e => this.handleInputChange(e)}
              placeholder="3"
              name="numberOfImages"
              type="number"
              icon="pt-icon-media"
            /> 
          </FormGroup>

          <FormGroup label="Timer" helperText="Time is in seconds">
            <Input 
              value={this.state.timer} 
              onChange={e => this.handleInputChange(e)}
              placeholder="10 seconds"
              name="timer"
              type="number"
              icon="pt-icon-time"
            /> 
          </FormGroup>

          <Button 
            intent="PRIMARY" 
            text="Search" 
            large
            onClick={() => alert('test')}
          />
        </div>
      </div>
    );
  }
}

export default App;
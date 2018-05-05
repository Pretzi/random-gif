import React, { Component } from 'react';
import { FormGroup } from "@blueprintjs/core";
import Input from './components/common/input/Input';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h2 className="App__title">Search Random Gifs</h2>
          <FormGroup
            label="Gif Category"
          >
            <Input 
              value="" 
              onChange={(e) => console.log(e.target.name, 'test')}
              placeholder="Tacos"
              type="search"
              name='category'
            /> 
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default App;
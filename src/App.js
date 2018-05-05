import React, { Component } from 'react';
import { FormGroup } from "@blueprintjs/core";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <h2 className="App__title">Search Random Gifs</h2>
          <FormGroup
            label="Gif Category"
          >
            <div className="pt-input-group pt-large">
              <span className="pt-icon pt-icon-search"></span>
              <input className="pt-input pt-large" type="search" placeholder="Tacos" dir="auto" />
            </div>
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default App;

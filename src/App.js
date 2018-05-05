import React, { Component } from 'react';
import { FormGroup, Button } from "@blueprintjs/core";
import AppContainer from './containers/AppContainer';
import Input from './components/common/input/Input';
import RandomGifs from './components/random-gifs/RandomGifs';
import PropTypes from 'prop-types';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const {
      category,
      timer,
      numberOfImages
    } = this.props;

    this.state = {
      category,
      timer,
      numberOfImages
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit() {
    const {
      category,
      numberOfImages,
      timer
    } = this.state;

    this.props.fetchGifs(
      category,
      numberOfImages,
      timer
    );
  }

  render() {
    const {
      gifs,
      showNumberOfImages,
      showTimer
    } = this.props

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

          {showNumberOfImages &&
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
          }

          {showTimer &&
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
          }

          <Button
            intent="PRIMARY"
            text="Search"
            large
            onClick={this.handleSubmit}
          />

          <RandomGifs gifs={gifs} />
        </div>
      </div>
    );
  }
}

App.displayName = 'App';
App.propTypes = {
  fetchGifs: PropTypes.func
};
App.defaultProps = {
  category: '',
  numberOfImages: 3,
  timer: 10,
  showNumberOfImages: true,
  showTimer: true
};

export default AppContainer(App);


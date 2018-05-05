import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RandomGifs extends Component {
  render() {
    const {
      gifs
    } = this.props;

    const randomGifs = gifs.map((gif,i) => (
      <img key={i} src={gif.image_url} />
    ))

    return (
      <div>
        {randomGifs}
      </div>
    );
  }
}

RandomGifs.displayName = 'RandomGifs';
RandomGifs.propTypes = {
  gifs: PropTypes.array
};

export default RandomGifs;
import { createLogic } from 'redux-logic';
import { gifsActions } from '../actions/gifs-actions';
import axios from 'axios';
import { setTimeout } from 'timers';

const {
  FETCH_GIFS,
  FETCH_GIFS_ERROR,
  FETCH_GIFS_SUCCESS
} = gifsActions;

export const fetchGifs = createLogic({
  type: FETCH_GIFS,
  latest: true,
  warnTimeout: 0,
  process({ action }, dispatch, done) {
    const {
      category,
      numberOfImages,
      timer
    } = action.payload

    for (let i = 0; i < numberOfImages; i++) {
      axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: 'h7XYSMDQGAe7jdli56bt5jvHeE6BVR2m',
          tag: category
        }
      })
        .then(response => {
          console.log(response, 'response')
          dispatch({
            type: FETCH_GIFS_SUCCESS,
            payload: response.data.data
          })
        })
        .catch(() => {
          dispatch({
            type: FETCH_GIFS_ERROR
          })
        })
    }

    setTimeout(() => {
      console.log('What about me?')
      dispatch({
        type: FETCH_GIFS,
        payload: action.payload
      })
    }, timer * 1000);
  }
});

export default [
  fetchGifs
];
import { createLogic } from 'redux-logic';
import { gifsActions } from '../actions/gifs-actions';
import axios from 'axios';
import { setTimeout } from 'timers';

const {
  FETCH_GIFS,
  FETCH_GIFS_ERROR,
  FETCH_GIFS_SUCCESS,
  CLEAR_GIFS,
  FETCH_GIFS_CANCEL
} = gifsActions;

export const fetchGifs = createLogic({
  type: FETCH_GIFS,
  latest: true,
  warnTimeout: 0,
  cancelType: FETCH_GIFS_CANCEL,
  process({APIKEY, action, getState }, dispatch, done) {
    const {
      category,
      numberOfImages,
      timer
    } = action.payload

    if(getState().gifs.entities.length === numberOfImages) {
      dispatch({
        type: CLEAR_GIFS
      })
    }

    for (let i = 0; i < numberOfImages; i++) {
      axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: APIKEY,
          tag: category
        }
      })
        .then(response => {
          if (response.status === 200) {
            const gif = response.data.data;

            if(gif.length === 0) {
              dispatch({
                type: FETCH_GIFS_ERROR,
                payload: {
                  notFound: true
                }
              });
              
              dispatch({
                type: FETCH_GIFS_CANCEL
              })
            }

            dispatch({
              type: FETCH_GIFS_SUCCESS,
              payload: gif
            });
          }
        })
        .catch(() => {
          dispatch({
            type: FETCH_GIFS_ERROR
          });
        })
    }

    setTimeout(() => {
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
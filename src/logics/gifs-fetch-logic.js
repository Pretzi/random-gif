import { createLogic } from 'redux-logic';
import { gifsActions } from '../actions/gifs-actions';

const {
  FETCH_GIFS,
  FETCH_GIFS_ERROR,
  FETCH_GIFS_SUCCESS,
  CLEAR_GIFS,
  FETCH_GIFS_CANCEL,
  GIFS_NOT_FOUND
} = gifsActions;

export const fetchGifs = createLogic({
  type: FETCH_GIFS,
  latest: true,
  warnTimeout: 0,
  cancelType: FETCH_GIFS_CANCEL,
  processOptions: {
    dispatchMultiple: true
  },
  process({axios, APIKEY, action, getState }, dispatch) {
    const {
      category,
      numberOfImages,
      timer
    } = action.payload

    if (getState().gifs.entities.length === numberOfImages) {
      dispatch({
        type: CLEAR_GIFS
      })
    }

    return axios
      .get('https://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: APIKEY,
          tag: category
        }
      })
      .then(response => {
        if (response.data.data) {
          const gif = response.data.data;

          if (gif.length === 0) {
            dispatch({
              type: GIFS_NOT_FOUND,
              payload: {
                notFound: true
              }
            });

            dispatch({
              type: FETCH_GIFS_CANCEL
            })
          } else {
            dispatch({
              type: FETCH_GIFS_SUCCESS,
              payload: gif
            });
          }
        }
      })
      .catch(() => {
        dispatch({
          type: FETCH_GIFS_ERROR
        });
      })
      .then(() => {
        if (getState().gifs.entities.length !== numberOfImages) {
          dispatch({
            type: FETCH_GIFS,
            payload: action.payload
          })
        } else {
          setTimeout(() => {
            dispatch({
              type: FETCH_GIFS,
              payload: action.payload
            })
          }, timer * 1000);
        }
      })
  }
});

export default [
  fetchGifs
];
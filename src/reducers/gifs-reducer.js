import { gifsActions } from '../actions/gifs-actions';

const {
  FETCH_GIFS,
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_ERROR,
  CLEAR_GIFS
} = gifsActions;

const initialState = {
  loading: false,
  entities: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIFS: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case FETCH_GIFS_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        entities: [
          ...state.entities,
          action.payload
        ]
      });
    }

    case FETCH_GIFS_ERROR: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    case CLEAR_GIFS: {
      return Object.assign({}, state, {
        entities: []
      });
    }

    default: {
      return state;
    }
  }
}
import { connect } from 'react-redux';
import { gifsActions } from '../actions/gifs-actions'
import App from '../App';

const {
  FETCH_GIFS
} = gifsActions;

const mapStateToProps = (state, ownProps) => {
  return {
    gifs: state.gifs.entities
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGifs(category, numberOfImages, timer) {
      dispatch({
        type: FETCH_GIFS,
        payload: {
          category,
          numberOfImages,
          timer
        }
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)
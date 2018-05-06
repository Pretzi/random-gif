import { connect } from 'react-redux';
import { gifsActions } from '../actions/gifs-actions'

const {
  FETCH_GIFS,
  CLEAR_GIFS,
} = gifsActions;

const mapStateToProps = (state, ownProps) => {
  return {
    gifs: state.gifs.entities,
    loading: state.gifs.loading,
    notFound: state.gifs.notFound,
    error: state.gifs.error
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGifs(category, numberOfImages, timer) {
      dispatch({
        type: CLEAR_GIFS
      });
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
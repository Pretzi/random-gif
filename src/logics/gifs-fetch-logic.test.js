import { fetchGifs } from './gifs-fetch-logic';
import { gifsActions } from '../actions/gifs-actions';

const {
  FETCH_GIFS,
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_ERROR,
  FETCH_GIFS_CANCEL,
  CLEAR_GIFS,
  GIFS_NOT_FOUND
} = gifsActions;

const mockAction = {
  type: FETCH_GIFS,
  payload: {
    category: 'tacos',
    numberOfImages: 3,
    timer: 10
  }
};

const mockResponse = {
  status: 200,
  data: {
    data: [{}]
  }
};

const mockErrorResponse = {
  statusCode: 500,
  error: 'Internal Server Error',
  message: 'An internal server error occurred'
}

const noGifResponse = {
  status: 200,
  data: {
    data: []
  }
};

describe('Success Path', () => {
  const mockResult = [{}];

  const dispatchMock = jest.fn();

  const axiosMock = {
    get: jest.fn().mockReturnValue(Promise.resolve(mockResponse))
  };

  fetchGifs.process(
    {
      axios: axiosMock,
      APIKEY: '123',
      action: mockAction,
      getState: () => ({
        gifs: {
          entities: []
        }
      })
    },
    dispatchMock
  );

  [{
    type: FETCH_GIFS,
    payload: mockAction.payload
  }]

  it('Should dispatch FETCH_GIFS_SUCCESS', () => {
    expect(dispatchMock.mock.calls[0]).toEqual([
      {
        type: FETCH_GIFS_SUCCESS,
        payload: mockResult
      }
    ]);
  });

  it('Should dispatch FETCH_GIFS', () => {
    expect(dispatchMock.mock.calls[1]).toEqual([
      {
        type: FETCH_GIFS,
        payload: mockAction.payload
      }
    ]);
  });
});

describe('No gifs path', () => {
  const axiosMock = {
    get: jest.fn().mockReturnValue(Promise.resolve(noGifResponse))
  };

  const dispatchMock = jest.fn();

  fetchGifs.process(
    {
      axios: axiosMock,
      APIKEY: '123',
      action: mockAction,
      getState: () => ({
        gifs: {
          entities: []
        }
      })
    },
    dispatchMock
  );

  it('Should dispatch GIFS_NOT_FOUND', () => {
    expect(dispatchMock.mock.calls[0]).toEqual([
      {
        type: GIFS_NOT_FOUND,
        payload: {
          notFound: true
        }
      }
    ]);
  });

  it('Should dispatch GIFS_NOT_FOUND', () => {
    expect(dispatchMock.mock.calls[1]).toEqual([
      {
        type: FETCH_GIFS_CANCEL
      }
    ]);
  });
});

describe('Error path', () => {
  const axiosMock = {
    get: jest.fn().mockReturnValue(Promise.resolve(mockErrorResponse))
  };

  const dispatchMock = jest.fn();

  fetchGifs.process(
    {
      axios: axiosMock,
      APIKEY: '123',
      action: mockAction,
      getState: () => ({
        gifs: {
          entities: []
        }
      })
    },
    dispatchMock
  );

  it('Should dispatch FETCH_GIFS_ERROR', () => {
    expect(dispatchMock.mock.calls[0]).toEqual([
      {
        type: FETCH_GIFS_ERROR
      }
    ]);
  });
});
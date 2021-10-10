import {GET_FILM_LIST} from './actionTypes';

const initialState = {
  filmList: [],
  isLoading: false,
  hasError: false,
  isFulfilled: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_FILM_LIST}_PENDING`:
      return {
        ...state,
        isFulfilled: false,
        isLoading: true,
        hasError: false,
        filmList: [],
      };

    case `${GET_FILM_LIST}_FULFILLED`:
      return {
        isFulfilled: true,
        isLoading: false,
        hasError: false,
        filmList: action.payload.data,
      };

    case `${GET_FILM_LIST}_REJECTED`:
      return {
        isFulfilled: false,
        isLoading: false,
        hasError: true,
        filmList: [],
      };

    default:
      return state;
  }
};

export default reducer;

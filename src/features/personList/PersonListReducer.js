import {GET_PERSON_LIST} from './actionTypes';

const initialState = {
  personList: [],
  isLoading: false,
  hasError: false,
  isFulfilled: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PERSON_LIST}_PENDING`:
      return {
        ...state,
        isFulfilled: false,
        isLoading: true,
        hasError: false,
        personList: [],
      };

    case `${GET_PERSON_LIST}_FULFILLED`:
      return {
        isFulfilled: true,
        isLoading: false,
        hasError: false,
        personList: action.payload.data,
      };

    case `${GET_PERSON_LIST}_REJECTED`:
      return {
        isFulfilled: false,
        isLoading: false,
        hasError: true,
        personList: [],
      };

    default:
      return state;
  }
};

export default reducer;

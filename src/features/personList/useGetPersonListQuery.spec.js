import React from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import {waitFor} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import {promiseResolverMiddleware} from '../../middlewares/promiseResolverMiddleware';
import {GET_PERSON_LIST} from './actionTypes';
import useGetPersonListQuery from './useGetPersonListQuery';

jest.mock('axios');

describe('features > personList > useGetPersonListQuery', () => {
  const mockStore = configureStore([promiseResolverMiddleware]);

  const store = mockStore({
    person: {
      isLoading: false,
      hasError: false,
      isFulfilled: false,
    },
  });

  it('returns function', () => {
    const {result} = renderHook(() => useGetPersonListQuery(), {
      wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current).toBeInstanceOf(Function);
  });

  describe('gets person list', () => {
    afterEach(() => {
      store.clearActions();
    });

    it(`handles successful API query`, async () => {
      const {result} = renderHook(() => useGetPersonListQuery(), {
        wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
      });

      const response = 82;

      axios.get.mockImplementationOnce(() => Promise.resolve({data: response}));

      await result.current();

      expect(store.getActions()[0]).toEqual({
        type: `${GET_PERSON_LIST}_PENDING`,
      });

      await waitFor(() => {
        expect(store.getActions()[1].type).toEqual(
          `${GET_PERSON_LIST}_FULFILLED`
        );
        expect(store.getActions()[1].payload.data.allPeople.edges).toHaveLength(
          response
        );
      });
    });

    it(`handles rejected API query`, async () => {
      const {result} = renderHook(() => useGetPersonListQuery(), {
        wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
      });

      axios.get.mockImplementationOnce(() => Promise.reject(new Error('')));

      await result.current();

      expect(store.getActions()[0]).toEqual({
        type: `${GET_PERSON_LIST}_PENDING`,
      });

      await waitFor(() => {
        expect(store.getActions()[1].type).toEqual(
          `${GET_PERSON_LIST}_REJECTED`
        );
      });
    });
  });
});

import configureStore from 'redux-mock-store';
import {waitFor} from '@testing-library/react';
import {promiseResolverMiddleware} from './promiseResolverMiddleware';

const mockStore = configureStore([promiseResolverMiddleware]);

describe('promiseResolverMiddleware', () => {
  const store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it('passes through non-Promise actions', () => {
    const action = {
      type: 'FOO',
    };
    store.dispatch(action);
    expect(store.getActions()[0]).toBe(action);
  });

  it('dispatches _PENDING action when given Promise', () => {
    const action = {
      type: 'FOO',
      payload: Promise.resolve(),
    };
    store.dispatch(action);
    expect(store.getActions()[0]).toEqual({type: `${action.type}_PENDING`});
  });

  it('handles successful response', async () => {
    const response = 'foo';
    const action = {
      type: 'FOO',
      payload: Promise.resolve(response),
    };
    store.dispatch(action);
    await waitFor(() =>
      expect(store.getActions()[1]).toEqual({
        type: `${action.type}_FULFILLED`,
        payload: response,
      })
    );
  });

  it('handles rejection', async () => {
    const action = {
      type: 'FOO',
      payload: Promise.reject(),
    };
    store.dispatch(action);
    await waitFor(() =>
      expect(store.getActions()[1]).toEqual({
        type: `${action.type}_REJECTED`,
      })
    );
  });
});

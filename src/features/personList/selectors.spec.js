import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {renderHook} from '@testing-library/react-hooks';
import {usePersonList, useLoadingState} from './selectors';

describe('features > personList > usePersonList', () => {
  const mockStore = configureStore([]);

  const state = {
    person: {
      personList: [],
    },
  };

  const store = mockStore(state);

  it('returns person List', () => {
    const {result} = renderHook(() => usePersonList(), {
      wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current).toHaveLength(state.person.personList.length);
  });
});

describe('features > personList > useLoadingState', () => {
  const mockStore = configureStore([]);

  const state = {
    person: {
      isLoading: true,
      hasError: true,
      isFulfilled: true,
      foo: 'bar',
    },
  };

  const store = mockStore(state);

  it('returns person list', () => {
    const {result} = renderHook(() => useLoadingState(), {
      wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current).not.toBe(state.person);
    expect(state.person).toMatchObject(result.current);
  });
});

import React from 'react';

const withProvider =
  ({store, Provider}) =>
  WrappedComponent =>
  props =>
    (
      <Provider store={store}>
        <WrappedComponent {...props} />
      </Provider>
    );

export default withProvider;

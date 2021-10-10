export const promiseResolverMiddleware = store => next => action => {
  if (typeof action?.payload?.then !== 'function') {
    return next(action);
  }
  action.payload.then(
    response => {
      store.dispatch({
        type: `${action.type}_FULFILLED`,
        payload: response,
      });
    },
    () => {
      store.dispatch({
        type: `${action.type}_REJECTED`,
      });
    }
  );
  return next({type: `${action.type}_PENDING`});
};

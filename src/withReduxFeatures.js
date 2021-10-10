import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {persistStateEnhancer} from './enhancers/persistStateEnhancer';
import {promiseResolverMiddleware} from './middlewares/promiseResolverMiddleware';
import {PersonListReducer} from './features/personList';
import {CounterReducer} from './features/counter';
import {RandomReducer} from './features/random';
import withProvider from './withProvider';
import FilmListReducer from './features/filmList/FilmListReducer';

/**
 * Create root reducer, containing
 * all features of the application
 */
const rootReducer = combineReducers({
  person: PersonListReducer,
  film: FilmListReducer,
  count: CounterReducer,
  random: RandomReducer,
});

/**
 * Use Redux Dev Tools, if they are installed in browser, otherwise compose from Redux
 */
/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/** Create Redux store with root reducer and middleware included */
const middlewareEnhancer = applyMiddleware(promiseResolverMiddleware);

const composedEnhancers = composeEnhancers(
  middlewareEnhancer,
  persistStateEnhancer()
);

export const store = createStore(rootReducer, undefined, composedEnhancers);

/**
 * Create HOC, which wraps given Component with Redux Provider
 */
export default withProvider({store, Provider});

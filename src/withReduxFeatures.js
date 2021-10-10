import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {persistStateEnhancer} from './enhancers/persistStateEnhancer';
import {promiseResolverMiddleware} from './middlewares/promiseResolverMiddleware';
import {PersonListReducer} from './features/personList';
import withProvider from './withProvider';
import FilmListReducer from './features/filmList/FilmListReducer';

const rootReducer = combineReducers({
  person: PersonListReducer,
  film: FilmListReducer,
});

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareEnhancer = applyMiddleware(promiseResolverMiddleware);

const composedEnhancers = composeEnhancers(
  middlewareEnhancer,
  persistStateEnhancer()
);

export const store = createStore(rootReducer, undefined, composedEnhancers);

export default withProvider({store, Provider});

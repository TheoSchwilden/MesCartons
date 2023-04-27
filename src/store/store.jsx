/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
import items from '../middlewares/items';
import CardBoards from '../middlewares/CardBoards';
import signUpMiddleware from '../middlewares/signUpMiddleware';
import Project from '../middlewares/Project';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(signUpMiddleware, items, CardBoards, Project),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;

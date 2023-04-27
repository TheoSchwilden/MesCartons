import { combineReducers } from 'redux';

import userReducer from './user';
import CardBoardReducer from './CardBoards';
import itemsReducer from './items';
import projectReducer from './Project';

const rootReducer = combineReducers({
  user: userReducer,
  CardBoards: CardBoardReducer,
  items: itemsReducer,
  Project: projectReducer,
});

export default rootReducer;

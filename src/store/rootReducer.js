import { combineReducers } from 'redux';
import pixabayReducer from './pixabay/reducer';

const rootReducer = combineReducers({
  pixabay: pixabayReducer
});

export default rootReducer;

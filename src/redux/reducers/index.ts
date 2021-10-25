import {combineReducers} from 'redux';
import userReducer from './userReducer';
import appReducer from './appReducer';


const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

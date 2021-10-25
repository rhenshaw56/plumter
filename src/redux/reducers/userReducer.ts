import * as types from '../actions/types';
import {UserActions, UserState} from '../../../types';

const initialState: UserState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  currentUser: null,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case types.LOGIN.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        error: null,
        currentUser: action.payload,
      };
    case types.LOGIN.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;

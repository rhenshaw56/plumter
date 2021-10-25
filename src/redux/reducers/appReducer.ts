import * as types from '../actions/types';
import {AppActions, AppState} from '../../../types';

const initialState: AppState = {
  activeTab: '',
};

const appReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case types.APP.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.activeTab,
      };
    default:
      return {
        ...state,
      };
  }
};

export default appReducer;

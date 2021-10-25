import * as types from './types';

import {SetActiveTab, TabScreenType} from '../../../types';

export const setActiveTab = (activeTab: TabScreenType): SetActiveTab => ({
  type: types.APP.SET_ACTIVE_TAB,
  activeTab,
});

import {
    ActionReducer,
    combineReducers,
    createSelector
} from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import * as fromRouterStore from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppSettings } from '../constants/AppSettings';
import { RouterStateUrl } from '../core/utils';

// ----------------------------- User reducers -----------------------------------------------//

import * as fromUserReducer from './user.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This mean our top level state interface
 * is just a map of keys to inner state types
 */

export interface State {
    router: fromRouterStore.RouterReducerState<RouterStateUrl>;
}



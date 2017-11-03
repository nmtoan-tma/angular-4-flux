import {
    ActionReducer,
    combineReducers,
    createSelector
} from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppSettings } from '../constants/AppSettings';
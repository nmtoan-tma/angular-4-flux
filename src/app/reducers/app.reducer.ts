import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
    combineReducers
} from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';

import { AppSettings } from '../constants/AppSettings';
import { RouterStateUrl } from '../core/utils';

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = AppSettings.ENVIRONMENT === 'dev' ? [logger, storeFreeze] : [];
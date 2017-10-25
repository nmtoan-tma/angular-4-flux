import { ActionReducer, ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
// import { storeFreeze } from 'ngrx-store-freeze';

import { AppSettings } from '../shared/constants/AppSettings';
import * as fromLayout from '../core/reducers/layout';
import { RouterStateUrl } from '../shared/utils';

export interface State {
    layout: fromLayout.State;
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer,
    routerReducer: fromRouter.routerReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

// export const metaReducers: MetaReducer<State>[] = AppSettings.ENVIRONMENT !== 'prod' ? [logger, storeFreeze] : [];


/**
 * Layout Reducers
 */

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
    getLayoutState,
    fromLayout.getShowSidenav
);

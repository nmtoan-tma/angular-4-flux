// import {
//     ActionReducer,
//     combineReducers,
//     createSelector,
//     MetaReducer
// } from '@ngrx/store';
// /**
//  * The compose function is one of our most handy tools. In basic terms, you give
//  * it any number of functions and it returns a function. This new function
//  * takes a value and chains it through every composed function, returning
//  * the output.
//  *
//  * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
//  */
// import { compose } from '@ngrx/core/compose';
// import * as fromRouterStore from '@ngrx/router-store';
// /**
//  * storeFreeze prevents state from being mutated. When mutation occurs, an
//  * exception will be thrown. This is useful during development mode to
//  * ensure that none of the reducers accidentally mutates the state.
//  */
// import { storeFreeze } from 'ngrx-store-freeze';

// import { AppSettings } from '../constants/AppSettings';
// // import { RouterStateUrl } from '../core/utils';

// // ----------------------------- User reducers -----------------------------------------------//

// import * as fromUserReducer from './user.reducer';
// import * as fromUserModel from '../models/user.model';

// /**
//  * As mentioned, we treat each reducer like a table in a database. This mean our top level state interface
//  * is just a map of keys to inner state types
//  */
// export interface State {
//     router: fromRouterStore.RouterReducerState; // TODO
//     users: fromUserModel.UserState;
// }

// /**
//  * Because metareducers take a reducer function and return a new reducer,
//  * we can use our compose helper to chain them together. Here we are
//  * using combineReducers to make our top level reducer, and then
//  * wrapping that in storeLogger. Remember that compose applies
//  * the result from right to left.
//  */
// const reducers = {
//     router: fromRouterStore.routerReducer, // TODO,
//     users: fromUserReducer.reducer
// };

// // development reducer includes storeFreeze to prevent state from being mutated
// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

// // production reducer
// const productionReducer: ActionReducer<State> = combineReducers(reducers);

// /**
//  * The signle reducer function
//  * 
//  * @function reducer
//  * @param state 
//  * @param action 
//  */
// export function reducer(state: any, action: any) {
//     if (AppSettings.ENVIRONMENT === 'dev') {
//         return developmentReducer(state, action);
//     } else {
//         return productionReducer(state, action);
//     }
// }

// /******************************************************
//  * 
//  * Users Reducers
//  * 
//  ******************************************************/

// /**
//  * Returns the users state
//  * 
//  * @function getUsersState
//  * @param {State} state Top level store
//  * @return {State}
//  */
// export const getUsersState = (state: State) => state.users;



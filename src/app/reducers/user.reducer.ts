import { Actions } from '../actions/user.action';
import { UserActionTypes } from '../constants/UserActionTypes';
import * as fromUserModel from '../models/user.model';

/**
 * The reducer function
 * 
 * @param state current state
 * @param action incoming action
 */
export function reducer(state = fromUserModel.initialState, action: Actions): fromUserModel.UserState {
    switch (action.type) {
        case UserActionTypes.AUTHENTICATE:
            return Object.assign({}, state, {
                error: undefined,
                loading: true
            });
        case UserActionTypes.AUTHENTICATE_SUCCESS:
            const user: fromUserModel.User = action.payload.user;

            if (user === null) {
                return state;
            }

            return Object.assign({}, state, {
                authenticated: true,
                error: undefined,
                loading: false,
                user: user
            });
        case UserActionTypes.AUTHENTICATE_ERROR:
            return Object.assign({}, state, {
                authenticated: false,
                error: action.payload.error.message,
                loading: false
            });
        default:
            return state;
    }
}

export const isAuthenticated = (state: fromUserModel.UserState) => state.authenticated;

export const isAuthenticatedLoaded = (state: fromUserModel.UserState) => state.loaded;

export const isLoading = (state: fromUserModel.UserState) => state.loading;

export const getAuthenticationError = (state: fromUserModel.UserState) => state.error;

export const getAuthenticatedUser = (state: fromUserModel.UserState) => state.user;




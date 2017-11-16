// import ui util
import { UIUtils } from '../../shared/ui-utils';

// import auth actions
import { Actions } from '../actions/auth.action';

// import auth action type
import { AuthActionTypes } from '../constants/AuthActionTypes';

// import models
import { Auth } from '../models/auth';
import { User } from '../models/users';
import { State, initialState } from '../models/auth-state';

/**
 * Reducer function
 * 
 * @function reducer
 * @param {State} state current state
 * @param {Actions} action incoming action
 */
export function reducer(state: any = initialState, action: Actions): State {
    switch (action.type) {
        case AuthActionTypes.SIGN_IN: {
            return Object.assign({}, state, {
                error: undefined,
                loading: true
            });
        }

        case AuthActionTypes.SIGN_IN_SUCCESS: {
            const user: User = action.payload.user;
            const stringUtil = new UIUtils();

            if (stringUtil.isNullOrUndefined(user)) {
                return state;
            }

            return Object.assign({}, state, {
                authenticated: true,
                error: undefined,
                loading: false,
                user: user
            });
        }

        case AuthActionTypes.SIGN_IN_ERROR: {
            return Object.assign({}, state, {
                authenticated: false,
                error: action.payload.error.message,
                loading: false
            });
        }

        default: {
            return state;
        }
    }
}

export const isAuthenticated = (state: State) => state.authenticated;

export const isSignInLoaded = (state: State) => state.loaded;
export const isSignInError = (state: State) => state.error;
export const isSignInUser = (state: State) => state.user;

export const isLoading = (state: State) => state.loading;

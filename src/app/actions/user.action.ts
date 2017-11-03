import { Action } from '@ngrx/store';

import { User } from '../models/user.model';
import { UserActionTypes } from '../constants/UserActionTypes';

// ------------------------AUTHENTICATION------------------------------//

/**
 * Authentication
 * 
 * @class Authentication
 * @implements {Action}
 */
export class AuthenticationAction implements Action {
    public type: string = UserActionTypes.AUTHENTICATE;

    constructor(public payload: {
        username: string,
        password: string,
        rememberMe: boolean
    }) { }
}

/**
 * Authentication success
 * 
 * @class AuthenticationSuccessAction
 * @implements {Action}
 */
export class AuthenticationSuccessAction implements Action {
    public type: string = UserActionTypes.AUTHENTICATE_SUCCESS;

    constructor(public payload: {
        user: User
    }) { }
}

/**
 * Authentication error
 * 
 * @class AuthenticationErrorAction
 * @implements {Action}
 */
export class AuthenticationErrorAction implements Action {
    public type: string = UserActionTypes.AUTHENTICATE_ERROR;

    constructor(public payload?: any) { }
}

// ------------------------AUTHENTICATED------------------------------//

/**
 * Checks if user is authenticated
 * @class AuthenticatedAction
 * @implements {Action}
 */
export class AuthenticatedAction implements Action {
    public type: string = UserActionTypes.AUTHENTICATED;

    constructor(public payload?: {
        token?: string
    }) { }
}

/**
 * Authenticated success
 * @class AuthenticatedSuccessAction
 * @implements {Action}
 */
export class AuthenticatedSuccessAction implements Action {
    public type: string = UserActionTypes.AUTHENTICATED_SUCCESS;

    constructor(public payload: {
        authenticated: boolean,
        user: User
    }) { }
}

/**
 * Authenticated error
 * @class AuthenticatedErrorAction
 * @implements {Action}
 */
export class AuthenticatedErrorAction implements Action {
    public type: string = UserActionTypes.AUTHENTICATED_ERROR;

    constructor(public payload?: any) { }
}

// --------------------------ACTIONS------------------------------//

/**
 * Actions type
 * 
 * @type {Actions}
 */
export type Actions
    =
    AuthenticationAction
    | AuthenticationSuccessAction
    | AuthenticationErrorAction
    | AuthenticatedAction
    | AuthenticatedSuccessAction
    | AuthenticatedErrorAction;

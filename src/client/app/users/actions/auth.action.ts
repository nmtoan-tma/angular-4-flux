// import @ngrx
import { Action } from '@ngrx/store';

// import models
import { Auth } from '../models/auth';
import { User } from '../models/users';

// import auth action type
import { AuthActionTypes } from '../constants/auth-action-type';

/**
 * Sign in
 * 
 * @class SignInAction
 * @implements {Action}
 */
export class SignInAction implements Action {
    readonly type: string = AuthActionTypes.SIGN_IN;

    constructor(public payload: {
        userName: string,
        password: string
    }) { }
}

/**
 * Sign in success
 * 
 * @class SingInSuccessAction
 * @implements {Action}
 * @return {User}
 */
export class SingInSuccessAction implements Action {
    readonly type: string = AuthActionTypes.SIGN_IN_SUCCESS;

    constructor(public payload: { user: User }) { }
}

/**
 * Sign in error
 * 
 * @class SignInErrorAction
 * @implements {Action}
 * @returns {any}
 */
export class SignInErrorAction implements Action {
    readonly type: string = AuthActionTypes.SIGN_IN_ERROR;

    constructor(public payload?: any) { }
}

// /**
//  * Sign in redirect
//  * 
//  * @class SignInRedirectAction
//  * @implements {Action}
//  */
// export class SignInRedirectAction implements Action {
//     readonly type: string = AuthActionTypes.SIGN_IN_REDIRECT;
// }

/**
 * Actions type
 * 
 * @type {Actions}
 */
export type Actions
    = SignInAction
    | SingInSuccessAction
    | SignInErrorAction;
    // | SignInRedirectAction;

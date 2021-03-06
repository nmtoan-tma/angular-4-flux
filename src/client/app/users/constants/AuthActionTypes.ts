import { type } from '../../utils/utils';

export const AuthActionTypes = {
    SIGN_IN: type('[auth] Sign In'),
    SIGN_IN_SUCCESS: type('[auth] Sign In Success'),
    SIGN_IN_ERROR: type('[auth] Sign In Error'),
    SIGN_IN_REDIRECT: type('[auth] Sign In Redirect')
};
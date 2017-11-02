import { type } from '../core/utils';

export const UserActionTypes = {
    AUTHENTICATE: type('[users] Authenticate'),
    AUTHENTICATE_ERROR: type('[user] Authenticate error'),
    AUTHENTICATE_SUCCESS: type('[user] Authenticate success'),
    AUTHENTICATED: type('[user] Authenticated'),
    AUTHENTICATED_ERROR: type('[user] Authenticated error'),
    AUTHENTICATED_SUCCESS: type('[user] Authenticated success')
}
import { type } from '../core/utils';

export const UserActionTypes = {
    AUTHENTICATION: type('[users] Authentication'),
    AUTHENTICATION_ERROR: type('[user] Authentication error'),
    AUTHENTICATION_SUCCESS: type('[user] Authentication success'),
    AUTHENTICATED: type('[user] Authenticated'),
    AUTHENTICATED_ERROR: type('[user] Authenticated error'),
    AUTHENTICATED_SUCCESS: type('[user] Authenticated success')
};
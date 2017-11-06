export class User {
    _id?: number;
    username: string;
    password: string;
    rememberMe: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
}

/**
 * The state
 * 
 * @interface State
 */
export interface UserState {
    authenticated: boolean;
    error?: string;
    loading: boolean;
    loaded: boolean;
    user?: User;
}

export const initialState: UserState = {
    authenticated: false,
    loading: false,
    loaded: false
};

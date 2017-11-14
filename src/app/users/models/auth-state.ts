// import model
import { User } from './users';

/**
* State
* 
* @interface State
*/
export interface State {
    authenticated: boolean;
    error?: string;
    loaded: boolean;
    loading: boolean;
    user?: User;
}

export const initialState: State = {
    authenticated: false,
    loaded: false,
    loading: false
};
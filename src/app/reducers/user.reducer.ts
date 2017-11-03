import { Actions } from '../actions/user.action';
import { UserActionTypes } from '../constants/UserActionTypes';
import { User } from '../models/user.model';


export interface UserState {
    authenticated: boolean;
    error?: string;
    loading: boolean;
    user?: User;
}

import { Action } from '@ngrx/store';

import * as ActionTypes from '../constants/ActionTypes.constant';

export class Login implements Action {
    readonly type = ActionTypes.LOG_IN;
}

export class LogOut implements Action {
    readonly type = ActionTypes.LOG_OUT;
}



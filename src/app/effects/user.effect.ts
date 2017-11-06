import { Injectable } from '@angular/core';

// @ngrx
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

// import rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

// import service
import { UserService } from '../services/user.service';

// import models
import { User } from '../models/user.model';

// import actions
import { UserActionTypes } from '../constants/UserActionTypes';

import * as fromUserActions from '../actions/user.action';

@Injectable()

export class UserEffects {
    /**
     * Authenticate user
     * @method authenticate
     */
    @Effect()
    public authenticate: Observable<Action> = this.actions
        .ofType(UserActionTypes.AUTHENTICATE)
        .debounceTime(500)
        .map(toPayload)
        .switchMap(payload => {
            return this.userService.authenticate(payload.username, payload.password, payload.rememberMe)
                .map(user => new fromUserActions.AuthenticationSuccessAction({ user: user }))
                .catch(error => Observable.of(new fromUserActions.AuthenticationErrorAction({ error: error })))
        });

    /**
   * @constructor
   * @param {Actions } actions
   * @param {UserService} userService
   */
    constructor(
        private actions: Actions,
        private userService: UserService
    ) { }
}
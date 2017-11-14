import { Injectable } from '@angular/core';

// import @ngrx
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

// import rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

// import models
import { User } from '../models/users';

// import service
import { AuthService } from '../services/auth.service';

// import auth action type
import { AuthActionTypes } from '../constants/auth-action-type';

// import auth action
import {
    SignInAction,
    SingInSuccessAction,
    SignInErrorAction,
    SignInRedirectAction
} from '../actions/auth.action';

@Injectable()
export class AuthEffects {
    @Effect()
    public signIn: Observable<Action> = this.actions
        .ofType(AuthActionTypes.SIGN_IN)
        .debounceTime(500)
        .map(toPayload)
        .switchMap(payload => {
            return this.authService.signIn(payload.username, payload.password)
                .map(user => new SingInSuccessAction({user: user}))
                .catch(error => new SignInErrorAction({error: error}));
        });

    /**
     * @constructor
     * @param {Actions} actions
     * @param {AuthService} authService
     */
    constructor(private actions: Actions, private authService: AuthService) { }
}
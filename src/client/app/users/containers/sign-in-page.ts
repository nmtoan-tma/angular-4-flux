import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromAngularForms from '@angular/forms';
import { Observable } from 'rxjs/Observable';

// import @ngrx
import { Store } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

// import models
import { Auth } from '../models/auth';
import { State } from '../models/auth-state';

// import resources
import { LoginPageResource } from '../resources/users.resource';

// import actions use to page
import { SignInAction } from '../actions/auth.action';

// import reducer for this actions
import {

} from '../reducers/auth.reducer';

@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in-page.html'
})

export class SignInComponent implements OnInit {
    public resource: any;
    public user: Auth;
    public error: Observable<string>;

    private loginForm: fromAngularForms.FormGroup;

    constructor(private store: Store<State>) { }
    ngOnInit() {
        this.resource = LoginPageResource;
        this.user = {
            userName: '',
            password: '',
            rememberMe: false
        };
        this.loginForm = new fromAngularForms.FormGroup({
            username: new fromAngularForms.FormControl(),
            password: new fromAngularForms.FormControl(),
            rememberMe: new fromAngularForms.FormControl()
        });
    }

    onSubmit(form) {
        this.store.dispatch(form.value);
    }
}
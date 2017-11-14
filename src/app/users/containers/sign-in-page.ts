import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromAngularForms from '@angular/forms';

import { LoginPageResource } from '../resources/users.resource';
import { Auth } from '../models/auth';

@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in-page.html'
})

export class SignInComponent implements OnInit {
    public resource: any;
    public user: Auth;
    private loginForm: fromAngularForms.FormGroup;

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
}
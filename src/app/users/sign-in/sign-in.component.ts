import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromAngularForms from '@angular/forms';

import { LoginPageResource } from '../../enums/LoginPage.resource';
import { Users } from '../../core/models/users';

@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.component.html'
})

export class SignInComponent implements OnInit {
    public resource: any;
    public user: Users;
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
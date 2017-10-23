import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user.model';
import { LoginResource } from './login.resource';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [
        AuthenticationService
    ]
})

export class LoginComponent {
    public resource = LoginResource;
    public user: Observable<User>;

    // constructor(private _service: AuthenticationService) {

    // }

    // login() {
    //     console.log('fdfdfd');
    // }
}


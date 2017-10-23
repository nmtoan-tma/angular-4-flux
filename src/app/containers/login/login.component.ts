import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { } from '../../services/authentication.service';

import { User } from '../../models/user.model';


import { LoginResource } from '../../resources/login.resource';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [

    ]
})

export class LoginComponent {
    resource = LoginResource;

    user: Observable<User>;

}


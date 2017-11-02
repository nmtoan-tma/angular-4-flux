import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhite';
 
import { LoginPageResource } from '../enums/LoginPage.resource';
import {} from '../actions/user.action';

@Component({
    moduleId: module.id,
    selector: 'mc-login-page',
    templateUrl: './views/login-page.component.html'
})

export class LoginPageComponent implements OnInit, OnDestroy {
    public resource = LoginPageResource;

    /**
     * @method ngOnInit
     */
    public ngOnInit() {
        console.log('login page');
    }
}
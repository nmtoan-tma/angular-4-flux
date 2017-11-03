import {
    Component,
    OnInit,
    OnDestroy,
    Input
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @ngrx
import { Store } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';

// actions
import { AuthenticationAction } from '../actions/user.action';

// reducers
import {
    
} from '../reducers/user.reducer';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: './views/login-form.component.html'
})

export class LoginFormComponent implements OnInit, OnDestroy {
    @Input() resource: any;

    public ngOnInit() {
        console.log('init login form');
    }

    public ngOnDestroy() {
        console.log('destroy login form');
    }
}
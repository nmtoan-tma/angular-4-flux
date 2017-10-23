import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {
    user: Observable<User>;

    // constructor(
    //     private http: Http,
    //     private store: Store<>
    // );
}

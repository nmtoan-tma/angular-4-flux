import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as Models from '../models/index';

// import { SERVICE_URL } from '../js/config';

@Injectable()

export class AuthenticationService {
    user: Observable<Models.User>;

    // constructor(
    //     private http: Http,
    //     private store: Store<>
    // );
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

// import models for mock data -TODO
import { User, initialUser } from '../models/users';

export const MOCK_USER = initialUser; // TODO

@Injectable()
export class AuthService {
    
    private _authenticated = false;

    public signIn(userName: string, password: string): Observable<User> {
        // TODO for call API
        if (userName === MOCK_USER.userName && password === MOCK_USER.passWord) {
            this._authenticated = true;

            return Observable.of(MOCK_USER);
        }

        return Observable.throw(new Error('Invalid username or password'));
    }
}
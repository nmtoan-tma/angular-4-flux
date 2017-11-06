import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { User } from '../models/user.model';

//  TODO
export const MOCK_USER = new User();
MOCK_USER.username = 'admin';
MOCK_USER.password = '123';

@Injectable()

export class UserService {
    /**
    * True if authenticated
    * @type
    */
    private _authenticated = false;

    /**
   * Authenticate the user
   *
   * @param {string} username The user's username
   * @param {string} password The user's password
   * @param {boolean} rememberMe The user's flag remember 
   * @returns {Observable<User>} The authenticated user observable.
   */
    public authenticate(username: string, password: string, rememberMe: boolean): Observable<User> {
        if (username === MOCK_USER.username && password === MOCK_USER.password) {
            this._authenticated = true;
            return Observable.of(MOCK_USER);
        }

        return Observable.throw(new Error('Invalid username or password'));
    }

    /**
   * Determines if the user is authenticated
   * @returns {Observable<boolean>}
   */
    public authenticated(): Observable<boolean> {
        return Observable.of(this._authenticated);
    }

}
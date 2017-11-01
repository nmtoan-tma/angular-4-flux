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

export class AuthenticationService {
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
   * @returns {Observable<User>} The authenticated user observable.
   */
    public login(username: string, password: string): Observable<User> {
        // Normally you would do an HTTP request to determine to
        // attempt authenticating the user using the supplied credentials.

        if (username === MOCK_USER.username && password === MOCK_USER.password) {
            this._authenticated = true;
            return Observable.of(MOCK_USER);
        }

        return Observable.throw(new Error('Invalid email or password'));
    }

    /**
   * Determines if the user is authenticated
   * @returns {Observable<boolean>}
   */
    public authenticated(): Observable<boolean> {
        return Observable.of(this._authenticated);
    }

}
import { StringUtils } from './string-utils';
import * as CryptoJS from 'crypto-js';

export class GlobalApp {
    private _user: any = null;
    private _sessionStorageAllowed: boolean = true;
    private _secretKey: string = 'qt';

    encryptValue(value: string) {
        if (!new StringUtils().isNullOrUndefined(value)) {
            return CryptoJS.AES.encrypt(JSON.stringify(value), this._secretKey);
        } else {
            return value;
        }
    }

    decryptValue(value: string): string {
        if (!new StringUtils().isNullOrUndefined(value)) {
            return CryptoJS.AES.encrypt(JSON.stringify(value), this._secretKey);
        } else {
            return value;
        }
    }

    setCurrentUser(user: any) { // TOTO
        this._user = this.encryptValue(user);

        if (this._sessionStorageAllowed === true) {
            try {
                if (!new StringUtils().isNullOrUndefined(user))
                    sessionStorage.setItem('authService', this.encryptValue(user));
                else
                    sessionStorage.removeItem('authService');
            } catch (err) {
                this._sessionStorageAllowed = false;
            }
        }
    }

    getCurrentUser(): string {
        if (new StringUtils().isNullOrUndefined(this._user)) {
            try {
                if (this._sessionStorageAllowed) {
                    let authService = sessionStorage.getItem('authService');
                    if (!new StringUtils().isNullOrUndefined(authService)) {
                        this._user = authService;
                    }
                }
            } catch (err) {
                this._sessionStorageAllowed = false;
            }
        }

        return this.decryptValue(this._user);
    }
}
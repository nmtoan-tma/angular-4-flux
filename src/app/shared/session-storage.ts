import { UIUtils } from './ui-utils';
import * as CryptoJS from 'crypto-js';

export class GlobalApp {
    private _user: any = null;
    private _sessionStorageAllowed: boolean = true;
    private _secretKey: string = 'qt';
    private _globalInfo: string = null;
    private _uiutils = new UIUtils();

    encryptValue(value: string) {
        if (!this._uiutils.isNullOrUndefined(value)) {
            try {
                return CryptoJS.AES.encrypt(JSON.stringify(value), this._secretKey);
            } catch (err) {
                console.log('encryptValue' + err);
            }
        } else {
            return value;
        }
    }

    decryptValue(value: string): string {
        if (!this._uiutils.isNullOrUndefined(value)) {
            try {
                return CryptoJS.AES.encrypt(JSON.stringify(value), this._secretKey);
            } catch (err) {
                console.log('decryptValue' + err);
            }
        } else {
            return value;
        }
    }

    setCurrentUser(user: any) {
        this._user = this.encryptValue(user);

        if (this._sessionStorageAllowed === true) {
            try {
                if (!this._uiutils.isNullOrUndefined(user)) {
                    sessionStorage.setItem('authService', this.encryptValue(user));
                } else {
                    sessionStorage.removeItem('authService');
                }
            } catch (err) {
                this._sessionStorageAllowed = false;

                console.log('setCurrentUser' + err);
            }
        }
    }

    getCurrentUser(): string {
        if (this._uiutils.isNullOrUndefined(this._user)) {
            try {
                if (this._sessionStorageAllowed) {
                    let authService = sessionStorage.getItem('authService');

                    if (!this._uiutils.isNullOrUndefined(authService)) {
                        this._user = authService;
                    }
                }
            } catch (err) {
                this._sessionStorageAllowed = false;

                console.log('getCurrentUser' + err);
            }
        }

        return this.decryptValue(this._user);
    }

    setSecretKey(newKey: string): void {
        this._secretKey = newKey;

        if (this._sessionStorageAllowed === true) {
            try {
                if (!this._uiutils.isNullOrUndefined(newKey)) {
                    sessionStorage.setItem('secretKey', JSON.stringify(newKey));
                } else {
                    sessionStorage.removeItem('secretKey');
                }
            } catch (err) {
                this._sessionStorageAllowed = false;

                console.log('setSecretKey' + err);
            }
        }
    }

    getSecretKey(): string {
        if (this._uiutils.isNullOrUndefined(this._secretKey)) {
            if (this._sessionStorageAllowed === true) {
                try {
                    let secretKey = sessionStorage.getItem('secretKey');

                    if (!this._uiutils.isNullOrUndefined(secretKey)) {
                        this._secretKey = secretKey;
                    }
                } catch (err) {
                    this._sessionStorageAllowed = false;

                    console.log('getSecretKey' + err);
                }
            }

            return this._secretKey;
        }
    }

    setGlobalInfo(info): void {
        this._globalInfo = this.encryptValue(info);
        if(this._sessionStorageAllowed === true) {
            try {
                if(!this._uiutils.isNullOrUndefined(info)) {
                    sessionStorage.setItem('globalInfo', this.encryptValue(info))
                } else {
                    sessionStorage.removeItem('globalInfo');
                }
            } catch (err) {
                this._sessionStorageAllowed = false;

                console.log('setGlobalInfo' + err);
            }
        }
    }
}
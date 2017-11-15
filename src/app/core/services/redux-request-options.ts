import { BaseRequestOptions } from '@angular/http';

import { GlobalApp } from '../../shared/global-app';

export class ReduxRequestOptions extends BaseRequestOptions {
    public token: string;

    constructor(options?: any) {
        super();

        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Expose-Headers', '');

        // const user = 
    }
}
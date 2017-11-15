import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {
    HttpClient
} from '@angular/common/http';

import { AppSettings } from '../../enums/AppSettings';

export class BaseService extends HttpClient {
    private _baseUrl = AppSettings.SERVICE_URL;
}
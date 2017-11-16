import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {
    HttpClient
} from '@angular/common/http';

import { AppSettings } from '../../enums/AppSettings';
import { ReduxRequestOptions } from './redux-request-options';

export class BaseService extends HttpClient {
    serviceUrl = AppSettings.SERVICE_URL;
}
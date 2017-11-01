import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './containers/not-found-page.component';
import { LoginPageComponent } from './containers/login-page.component';

import * as Author from './services/authorization.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
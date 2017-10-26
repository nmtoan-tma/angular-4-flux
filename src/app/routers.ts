import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './containers/not-found-page.component';
import { LoginPageComponent } from './containers/login-page.component';

import * as Author from './services/authorization.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
        // canActivate: [Author]
    },
    {
        path: 'login',
        component: LoginPageComponent,
        // canActivate: [Author]
    },
    {
        path: '**',
        component: NotFoundPageComponent,
        // canActivate: [Author]
    }
];
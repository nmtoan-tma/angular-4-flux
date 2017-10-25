import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './core/containers/not-found-page.component';
import { LoginPageComponent } from './auth/containers/login.component';

const routers: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent,
        // canActivate: [Author]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routers, {
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}



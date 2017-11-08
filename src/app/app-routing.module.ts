import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/users/sign-in'
    },
    {
        path: '404',
        component: NotFoundPageComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    },
    {
        path: 'users',
        loadChildren: 'app/users/users.module#UsersModule'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes, { useHash: false })
    ]
})

export class AppRoutingModule { }
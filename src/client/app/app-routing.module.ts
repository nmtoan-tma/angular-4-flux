import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './core/containers/not-found-page';

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
        path: 'users',
        loadChildren: 'app/users/users.module#UsersModule'
    },
    {
        path: '**',
        redirectTo: '/404'
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

export class AppRoutingModule {}
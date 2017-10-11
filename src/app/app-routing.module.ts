import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routers: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routers)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}


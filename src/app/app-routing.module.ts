import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CONTAINERS_ROUTERS } from './containers/index';

const routers: Routes = [
    {
        path: '',
        component: CONTAINERS_ROUTERS.LoginFormComponent
    },
    {
        path: '**',
        component: CONTAINERS_ROUTERS.NotFoundPageComponent
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



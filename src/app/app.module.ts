import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import {
    MatSidenavModule,
    MatCardModule,
    MatButtonModule
} from '@angular/material';

import { routes } from './routers';

/**
 * Module
 */
const MODULES = [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,

    /*-----------Start Material-------------*/

    MatSidenavModule,
    MatCardModule,
    MatButtonModule,

    /*-----------End Material-------------*/

    RouterModule.forRoot(routes, { useHash: false }),
    // StoreRouterConnectingModule,
];

/**
 * Containers
 * Components
 */
import {
    AppComponent,
    LoginPageComponent,
    NotFoundPageComponent
} from './containers/index';

import {
    LayoutComponent,
    LoginFormComponent
} from './components/index';

const COMPONENTS = [
    AppComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    LayoutComponent,
    LoginFormComponent
];

/**
 * PROVIDERS
 */
import { AuthenticationService, AuthorizationService } from './services/index';

const PROVIDERS = [
    AuthenticationService
];

@NgModule({
    declarations: COMPONENTS,
    imports: MODULES,
    providers: PROVIDERS,
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
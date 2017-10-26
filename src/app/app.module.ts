import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
    MatSidenavModule
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
    MatSidenavModule,
    RouterModule.forRoot(routes, { useHash: false })
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
    LayoutComponent 
} from './components/index';

const COMPONENTS = [
    AppComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    LayoutComponent
];

/**
 * PROVIDERS
 */
// import { AuthenticationService, AuthorizationService } from './services/index';

const PROVIDERS = [];

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
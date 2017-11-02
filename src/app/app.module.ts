import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { routes } from './routers';
import { CustomMaterialModule } from './containers/material.module';
import { CustomServiceModule } from './services/services.module';

/**
 * Module
 */
const MODULES = [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CustomMaterialModule,
    RouterModule.forRoot(routes, { useHash: false }),
    StoreRouterConnectingModule
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

const PROVIDERS = [
    CustomServiceModule
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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule } from '@ngrx/store-log-monitor';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { routes } from './routers';
import { CustomMaterialModule } from './containers/material.module';
import { CustomServiceModule } from './services/services.module';
import { AppSettings } from './constants/AppSettings';

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
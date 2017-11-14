import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomMaterialModule } from './core/material.module';

import { AppSettings } from './enums/AppSettings';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';

// import { reducer } from './app.reducer';

import { AppComponent } from './core/containers/app-page';
import { NotFoundPageComponent } from './core/containers/not-found-page';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        AppRoutingModule,
        UsersModule,
        // StoreModule.forRoot(reducer),
        // StoreRouterConnectingModule,
        // (AppSettings.ENVIRONMENT === 'dev') ? StoreDevtoolsModule.instrument() : [],
        // EffectsModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
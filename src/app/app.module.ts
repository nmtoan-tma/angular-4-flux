import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found/not-found-page.component';
import { AppRoutingModule } from './app-routing.module';
import { reducer } from './app.reducer';

import { AppSettings } from './constants/AppSettings';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducer),
        StoreRouterConnectingModule,
        (AppSettings.ENVIRONMENT === 'dev') ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
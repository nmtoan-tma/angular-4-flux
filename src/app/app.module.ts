import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './users/users.module';

// import { reducer } from './app.reducer';

import { AppSettings } from './constants/AppSettings';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        UserModule,
        NotFoundPageModule,
        // StoreModule.forRoot(reducer),
        // StoreRouterConnectingModule,
        (AppSettings.ENVIRONMENT === 'dev') ? StoreDevtoolsModule.instrument() : [],
        // EffectsModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
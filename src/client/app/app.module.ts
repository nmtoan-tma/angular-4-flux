import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
    StoreRouterConnectingModule,
    RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './core/reducers/core.reducer';
import { CustomRouterStateSerializer } from './utils/utils';

// import settings
import { AppSettings } from './utils/enums/AppSettings';

// import new module
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

// import app component
import { AppComponent } from './core/containers/app-page';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule,
        AppSettings.ENVIRONMENT === 'dev' ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),

        AppRoutingModule,
        CoreModule.forRoot(),
        UsersModule.forRoot()
    ],
    providers: [
        {
            provide: RouterStateSerializer, useClass: CustomRouterStateSerializer
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
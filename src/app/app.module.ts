import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppSettings } from './shared/constants/AppSettings';
import { CustomRouterStateSerializer } from './shared/utils';

import { AppComponent } from './core/containers/app.component';
import { CoreModule } from './core/core.module';
// import { reducers, metaReducers } from './reducers/index';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,

        // StoreModule.forRoot(reducers, { metaReducers }),

        StoreRouterConnectingModule,

        AppSettings.ENVIRONMENT !== 'prod' ? StoreDevtoolsModule.instrument({
            monitor: useLogMonitor({
                visible: false,
                position: 'right'
            })
        }) : [],

        StoreLogMonitorModule,

        EffectsModule.forRoot([]),

        CoreModule.forRoot()
    ],
    providers: [
        {
            provide: RouterStateSerializer, useClass: CustomRouterStateSerializer
        }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }

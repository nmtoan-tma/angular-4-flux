/**
 * Libraries
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

/**
 * Router
 */
import { AppRoutingModule } from './app-routing.module';

/**
 * Components
 * Containers
 * Models
 * Services
 * Stores
 */
import { AppComponent } from './app.component';
import { Containers } from './containers/index';
import { Models } from './models/index';
import { Services } from './services/index';
import { Stores } from './stores/index';

@NgModule({
    declarations: [
        AppComponent,
        Containers
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        StoreModule.forRoot({
            Stores
        }),
        StoreDevtoolsModule.instrument({
            monitor: useLogMonitor({
                visible: false,
                position: 'right'
            })
        }),
        StoreLogMonitorModule
    ],
    providers: [
        Services
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}

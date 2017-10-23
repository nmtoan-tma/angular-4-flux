/**
 * Libraries
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

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
import { COMPONENTS } from './components/index';
import { CONTAINERS } from './containers/index';
import { SERVICES } from './services/index';
// import { STORES } from './stores/index';

@NgModule({
    declarations: [
        AppComponent,
        COMPONENTS,
        CONTAINERS,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        // StoreModule.forRoot({
        //     STORES
        // }),
        // StoreDevtoolsModule.instrument({
        //     monitor: useLogMonitor({
        //         visible: false,
        //         position: 'right'
        //     })
        // }),
        // StoreLogMonitorModule
    ],
    providers: [
        SERVICES
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}

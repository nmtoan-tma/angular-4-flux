import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CONTAINERS } from './containers/index';
import { COMPONENTS } from './components/index';

@NgModule({
    declarations: [
        AppComponent,
        CONTAINERS,
        COMPONENTS
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}

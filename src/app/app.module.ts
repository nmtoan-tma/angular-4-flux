/**
 * Libraries
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/index';

/**
 * Router
 */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
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

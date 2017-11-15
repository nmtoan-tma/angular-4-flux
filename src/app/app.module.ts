import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// import settings
import { AppSettings } from './enums/AppSettings';
import { AppRoutingModule } from './app-routing.module';

// import new module
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

        CoreModule,
        AppRoutingModule,
        UsersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
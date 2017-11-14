import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// import custom core
import { CustomMaterialModule } from './core/material.module';
import { AppSettings } from './enums/AppSettings';
import { AppRoutingModule } from './app-routing.module';

// import new module
import { UsersModule } from './users/users.module';

// import core component
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
        UsersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
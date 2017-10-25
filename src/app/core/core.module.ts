import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './containers/app.component';
import { NotFoundPageComponent } from './containers/not-found-page.component';

export const COMPONENTS = [
    AppComponent,
    NotFoundPageComponent
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    providers: [],
    exports: COMPONENTS
})

export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
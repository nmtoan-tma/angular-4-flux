import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromAngularForms from '@angular/forms';

import { CoreModule } from '../core/core.module';

import { UsersRoutingModule } from './users-routing.module';
import { SignInComponent } from './containers/sign-in-page';

const COMPONENTS = [
    SignInComponent
];

@NgModule({
    exports: COMPONENTS,
    imports: [
        CommonModule,
        fromAngularForms.FormsModule,
        fromAngularForms.ReactiveFormsModule,

        UsersRoutingModule,
        CoreModule.forRoot()
    ],
    declarations: COMPONENTS
})
export class UsersModule {
    static forRoot() {
        return {
            ngModule: CoreModule
        };
    }
}
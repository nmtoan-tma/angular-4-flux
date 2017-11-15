import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromAngularForms from '@angular/forms';

// import modules
import { UsersRoutingModule } from './users-routing.module';
import { CoreModule } from '../core/core.module';

// import users components
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
        CoreModule,
        UsersRoutingModule
    ],
    declarations: COMPONENTS
})
export class UsersModule { }
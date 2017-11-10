import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromAngularForms from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ShowErrorsComponent } from '../core/components/show-errors.component';

import { PassWordPatternValidatorDirective } from './validators/password-validator.directive';

const COMPONENTS = [
    SignInComponent,
    SignOutComponent,
    ShowErrorsComponent,
    PassWordPatternValidatorDirective
];

@NgModule({
    exports: COMPONENTS,
    imports: [
        CommonModule,
        fromAngularForms.FormsModule,
        fromAngularForms.ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: COMPONENTS
})
export class UsersModule { }
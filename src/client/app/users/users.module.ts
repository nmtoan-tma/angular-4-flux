import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromAngularForms from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { SignInComponent } from './containers/sign-in-page';
import { ShowErrorsComponent } from '../core/components/show-errors.component';
import { InputPatternValidatorDirective } from '../core/directives/input-pattern-validator.directive';
import { PassWordPatternValidatorDirective } from '../core/directives/password-validator.directive';

const COMPONENTS = [
    SignInComponent,
    InputPatternValidatorDirective,
    PassWordPatternValidatorDirective,
    ShowErrorsComponent
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
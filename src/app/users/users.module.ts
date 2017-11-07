import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';

const COMPONENTS = [
    SignInComponent
];

@NgModule({
    exports: COMPONENTS,
    imports: [
        CommonModule,
        UsersRoutingModule
    ],
    declarations: COMPONENTS
})
export class UserModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatCardModule
} from '@angular/material';

import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule
    ],
    declarations: [
        NotFoundPageComponent
    ],
    exports: [
        NotFoundPageComponent
    ]
})

export class NotFoundPageModule { }
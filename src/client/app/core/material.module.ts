import { NgModule } from '@angular/core';

import {
    MatCardModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule
    ],
    imports: [
        MatCardModule,
        MatButtonModule
    ]
})
export class CustomMaterialModule { }
import { NgModule } from '@angular/core';

import {
    MatSidenavModule,
    MatCardModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
    exports: [
        MatSidenavModule,
        MatCardModule,
        MatButtonModule
    ]
})

export class CustomMaterialModule { }
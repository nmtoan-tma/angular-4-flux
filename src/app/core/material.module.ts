import { NgModule } from '@angular/core';
import * as fromMaterial from '@angular/material';

@NgModule({
    exports: [
        fromMaterial.MatCardModule,
        fromMaterial.MatButtonModule
    ]
})
export class CustomMaterialModule { }
import { NgModule } from '@angular/core';
import * as fromAngularForms from '@angular/forms';
import { CommonModule } from '@angular/common';

// import core services
import { BaseService } from './services/base.service';

// import core containers
import { NotFoundPageComponent } from './containers/not-found-page';

// import core components
import { ShowErrorsComponent } from './components/show-errors.component';

// import core directives
import { InputPatternValidatorDirective } from './directives/input-pattern-validator.directive';
import { PassWordPatternValidatorDirective } from './directives/password-validator.directive';

// import another modules
import { CustomMaterialModule } from './material.module';

const CORE_COMPONENTS = [
    ShowErrorsComponent,
    NotFoundPageComponent,
    InputPatternValidatorDirective,
    PassWordPatternValidatorDirective
];

@NgModule({
    declarations: CORE_COMPONENTS,
    imports: [
        CommonModule,
        fromAngularForms.FormsModule,
        fromAngularForms.ReactiveFormsModule,
        CustomMaterialModule
    ],
    exports: CORE_COMPONENTS,
    providers: [
        // BaseService
    ]
})
export class CoreModule {

}
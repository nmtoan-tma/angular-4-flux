import { NgModule } from '@angular/core';

import { AuthenticationService } from './authentication.service';
import { AuthorizationService } from './authorization.service';

@NgModule({
    exports: [
        AuthenticationService,
        AuthorizationService
    ]
})

export class CustomServiceModule {}
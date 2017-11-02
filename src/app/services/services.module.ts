import { NgModule } from '@angular/core';

import { UserService } from './user.service';

@NgModule({
    exports: [
        UserService
    ]
})

export class CustomServiceModule {}
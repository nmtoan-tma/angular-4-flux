import { Component } from '@angular/core';

import { LoginPageResource } from '../enums/LoginPage.resource';

@Component({
    moduleId: module.id,
    selector: 'mc-login-page',
    templateUrl: './views/login-page.component.html'
})

export class LoginPageComponent {
    public resource = LoginPageResource;
}
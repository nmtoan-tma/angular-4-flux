import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginPageResource } from '../../enums/LoginPage.resource';

@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.component.html'
})

export class SignInComponent {
    public resource = LoginPageResource;
}
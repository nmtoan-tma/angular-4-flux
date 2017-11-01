import { Component, OnInit } from '@angular/core';

import { LoginPageResource } from '../enums/LoginPage.resource';

@Component({
    moduleId: module.id,
    selector: 'mc-login-page',
    templateUrl: './views/login-page.component.html'
})

export class LoginPageComponent implements OnInit {
    public resource = LoginPageResource;

    ngOnInit() {
        
    }
}
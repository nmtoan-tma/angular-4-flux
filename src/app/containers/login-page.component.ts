import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginPageResource } from '../enums/LoginPage.resource';

@Component({
    moduleId: module.id,
    selector: 'login-page',
    templateUrl: './views/login-page.component.html'
})

export class LoginPageComponent implements OnInit, OnDestroy {
    public resource = LoginPageResource;

    /**
     * @method ngOnInit
     */
    public ngOnInit() {
        console.log('init login page');
    }

    /**
     * 
     */
    public ngOnDestroy() {
        console.log('destroy login page');
    }
}
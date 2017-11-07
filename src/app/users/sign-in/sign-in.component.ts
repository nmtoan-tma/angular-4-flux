import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginPageResource } from '../../enums/LoginPage.resource';

@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.component.html'
})

export class SignInComponent implements OnInit, OnDestroy {
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
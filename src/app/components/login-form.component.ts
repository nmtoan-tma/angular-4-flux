import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'mc-login-form',
    templateUrl: './views/login-form.component.html'
})

export class LoginFormComponent implements OnInit {
    @Input() resource: any;

    ngOnInit() {
        console.log('login form');
    }
}
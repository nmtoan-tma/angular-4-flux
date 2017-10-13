import { Component, OnInit } from '@angular/core';

import { LOGIN_RESOURCE } from '../../resources/login.resource';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    resource = LOGIN_RESOURCE;
}


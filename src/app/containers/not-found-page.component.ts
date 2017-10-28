import { Component } from '@angular/core';

import { NotFoundPageResource } from '../enums/NotFoundPage.resource';

@Component({
    moduleId: module.id,
    selector: 'mc-not-found-page',
    templateUrl: './views/not-found-page.component.html'
})

export class NotFoundPageComponent {
    public resource = NotFoundPageResource;
}
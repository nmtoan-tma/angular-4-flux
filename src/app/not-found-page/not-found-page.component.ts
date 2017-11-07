import { Component } from '@angular/core';

import { NotFoundPageResource } from '../enums/NotFoundPage.resource';

@Component({
    moduleId: module.id,
    selector: 'not-found-page',
    templateUrl: './not-found-page.component.html'
})

export class NotFoundPageComponent {
    public resource = NotFoundPageResource;
}
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'not-found-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: 'not-found-page.component.html'
})

export class NotFoundPageComponent { }

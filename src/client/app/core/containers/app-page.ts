import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app',
    template: `<router-outlet></router-outlet>`
})

export class AppComponent { }
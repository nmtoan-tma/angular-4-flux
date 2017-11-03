import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './views/app.component.html'
})

export class AppComponent {
    
}
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';


@Component({
    moduleId: module.id,
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'app.component.html'
})

export class AppComponent {

}
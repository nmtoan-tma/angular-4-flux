import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: []
})

export class AppComponent implements OnInit {

    ngOnInit() {
        console.log("Application component initialized ...");
    }
}

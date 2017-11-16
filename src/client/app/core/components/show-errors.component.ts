import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'show-errors',
    template: `
        <ul *ngIf="showErrors()" class="ul-invalid">
            <li class="invalid-feedback" *ngFor="let error of errors()">{{error}}</li>
        </ul>
    `
})

export class ShowErrorsComponent {
    private static readonly errorMessage = {
        required: (params) => 'This field is required',
        minLength: (params) => 'The min number of charaters is ' + params.requiredLength,
        maxLength: (params) => 'The max number of characters is ' + params.requiredLength,
        pattern: (params) => 'Operators such as ' + params.requiredPattern + ' are not allowed',
        password: (params) => params.message,
        inputPattern: (params) => params.message
    };

    @Input()
    private control: AbstractControlDirective | AbstractControl;

    public showErrors(): boolean {
        return this.control &&
            this.control.errors && (this.control.dirty || this.control.touched);
    }

    public errors(): string[] {
        return Object.keys(this.control.errors)
            .map(filed => this.getMessage(filed, this.control.errors[filed]));
    }

    private getMessage(type: string, params: any) {
        return ShowErrorsComponent.errorMessage[type](params);
    }
}
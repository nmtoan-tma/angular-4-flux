import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

import { LoginPageResource } from '../enums/LoginPage.resource';
import { UIUtils } from '../core/ui-utils';
import { StringUtils } from '../core/string-utils';

@Directive({
    selector: '[passWordPattern]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PassWordPatternValidatorDirective,
            multi: true
        }
    ]
})

export class PassWordPatternValidatorDirective implements Validator {
    validate(ctrl: FormControl): ValidationErrors {
        const currentValue = ctrl.value;
        let stringUtil = new StringUtils();

        if (stringUtil.isNullOrUndefined(currentValue)) {
            return null;
        } else {
            let uiUtil = new UIUtils();
            const isValid = uiUtil.isValidPassword(currentValue);

            const message = {
                password: {
                    message: LoginPageResource.msg_password_pattern
                }
            };

            return isValid ? null : message;
        }
    }
}
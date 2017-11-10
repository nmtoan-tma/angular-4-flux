import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

import { LoginPageResource } from '../../enums/LoginPage.resource';

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
        const currentValue = (ctrl.value);

        const isValid = this.isValidPassword(currentValue);

        const message = {
            password: {
                message: LoginPageResource.msg_password_pattern
            }
        };

        return isValid ? null : message;
    }

    private isValidPassword(password: string): boolean {
        var validated;
        var isInvalidPass = /(?=.*?[~`\\,.<>?/\|"';-=+.-])/.test(password);
        var isHasNumber = /(?=.*?[0-9])/.test(password);
        var isHasLowerCase = /(?=.*?[a-z])/.test(password);
        var isHasUpperCase = /(?=.*?[A-Z])/.test(password);
        var isHasSpecialCharacter = /(?=.*?[!@#$%^&*(){}[\]_])/.test(password);

        if (isInvalidPass === false) {
            if (isHasNumber === true && isHasLowerCase === true && isHasUpperCase === true) {
                return validated = true;
            }
            if (isHasNumber === true && isHasLowerCase === true && isHasSpecialCharacter === true) {
                return validated = true;
            }
            if (isHasNumber === true && isHasUpperCase === true && isHasSpecialCharacter === true) {
                return validated = true;
            }
            if (isHasLowerCase === true && isHasUpperCase === true && isHasSpecialCharacter === true) {
                return validated = true;
            }
        }
    }
}
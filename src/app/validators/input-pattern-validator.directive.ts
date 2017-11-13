import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

import { UIUtils } from '../core/ui-utils';
import { StringUtils } from '../core/string-utils';

@Directive({
    selector: '[inputPattern]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: InputPatternValidatorDirective,
            multi: true
        }
    ]
})

export class InputPatternValidatorDirective implements Validator {
    validate(ctrl: FormControl): ValidationErrors {
        const currentValue = ctrl.value;
        let stringUtil = new StringUtils();

        if (stringUtil.isNullOrUndefined(currentValue)) {
            return null;
        } else {
            let util = new UIUtils();
            const isValid = util.isValidInputPattern(currentValue);

            const message = {
                inputPattern: {
                    message: 'Operators such as [; ]; <; >; = are not allowed'
                }
            };

            return isValid ? null : message;
        }
    }
}

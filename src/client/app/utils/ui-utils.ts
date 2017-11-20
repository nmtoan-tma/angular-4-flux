/**
 * Modify Util for validators
 */
import * as _ from 'lodash';

export class UIUtils {
    isNullOrUndefined(value: any): boolean {
        return _.isNil(value) || value === '';
    }

    isEmpty(value: any): boolean {
        return _.isEmpty(value) || value === '';
    }
}
/**
 * Modify Util for validators
 */
import * as _ from 'lodash';

export class StringUtils {
    isNullOrUndefined(value: any): boolean {
        return _.isNil(value) || value === '';
    }
}
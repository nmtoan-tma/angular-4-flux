/**
 * Modify Util for validators
 */
import * as _ from 'lodash';

export class StringUtils {
    isNullOrUndefined(value: string): boolean {
        return _.isNil(value) || value === '';
    }
}
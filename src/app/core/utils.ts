import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.x, this enables powerful 
 * typerchecking ot our reducers.
 * 
 * Since every action label passes through this function it is a good place 
 * to ensure all of our action labels are unique 
 */

const typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
    if (typeCache[<string>label]) {
        throw new Error(`Action type '${label}' is not unique`);
    }

    typeCache[<string>label] = true;

    return <T>label;
}

/**
 * 
 */

export class RouterStateUrl {

}
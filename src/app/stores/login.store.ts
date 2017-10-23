import { LOGIN } from '../constants/ActionTypes.constant';

export const LOGIN_ITEM = (state: any = {}, { type, payload }) => {
    switch (type) {
        case LOGIN: 
            return payload;
        default:
            return state;
    }
}
import * as ActionTypes from '../constants/ActionTypes.constant';

export const LOGIN_ITEM = (state: any = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOG_IN:
            return payload;
        default:
            return state;
    }
};

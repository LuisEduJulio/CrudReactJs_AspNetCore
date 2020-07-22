import produce from 'immer';
import { CATEGORY_REQUEST } from '../actionTypes';

const INITIAL_STATE = {
    category: null
};

export default function category(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case CATEGORY_REQUEST: {
                draft.category = action.payload.category;
                break;
            }
            default:
                draft.category = null;
        }
    });
}
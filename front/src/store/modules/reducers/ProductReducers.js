import produce from 'immer';
import { REGISTER_PRODUCT_DELETE, REGISTER_PRODUCT_FAILURE, REGISTER_PRODUCT_REQUEST } from '../actionTypes';

const INITIAL_STATE = {
   product: null,
   id: 0
};

export default function product(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case REGISTER_PRODUCT_REQUEST: {
                draft.product = action.payload.product;
                break;
            }
            case REGISTER_PRODUCT_DELETE: {
                draft.id = action.payload.id;
                break;
            }
            case REGISTER_PRODUCT_FAILURE: {
                draft.product = null;
                break;
            }
            default:
                draft.product = null;
        }
    });
}
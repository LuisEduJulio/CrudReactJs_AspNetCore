import { REGISTER_PRODUCT_REQUEST, REGISTER_PRODUCT_UPDATE, REGISTER_PRODUCT_DELETE, REGISTER_PRODUCT_SUCESS,  REGISTER_PRODUCT_FAILURE } from '../actionTypes'

export function productAdd_Request(data){
    return {
        type: REGISTER_PRODUCT_REQUEST,
        payload: {data}
    }
}

export function productUpdate_Request(data){
    return {
        type: REGISTER_PRODUCT_UPDATE,
        payload: {data}
    }
}

export function productDelete_Request({id}){
    return {
        type: REGISTER_PRODUCT_DELETE,
        payload: {id}
    }
}

export function product_Sucess(result){
    return {
        type: REGISTER_PRODUCT_SUCESS,
        payload: {result}
    }
}

export function product_failure(){
    return {
        type: REGISTER_PRODUCT_FAILURE,
    }
}

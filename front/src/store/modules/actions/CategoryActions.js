import { CATEGORY_REQUEST, CATEGORY_SUCESS, CATEGORY_FAILURE } from '../actionTypes';

export function categoryAdd_Request(data){
    return{
        type: CATEGORY_REQUEST,
        payload: {data}
    }
} 

export function category_Sucess(result){
    return {
        type: CATEGORY_SUCESS,
        payload: {result}
    }
}

export function category_failure(){
    return {
        type: CATEGORY_FAILURE,
    }
}

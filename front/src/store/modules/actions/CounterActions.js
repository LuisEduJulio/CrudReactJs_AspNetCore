import { INCREMENT, DECREMENT } from '../actionstypes'

export function increment(){
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}


import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_REQUEST, REGISTER_REQUESTER } from '../actionTypes'

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token },
  };
}

export function signFailure() {
  return {
    type: SIGN_IN_FAILURE,
  };
}

export function singOutResquest() {
  return {
    type: SIGN_OUT_REQUEST,
  }
}

export function signUp(name, email, password){
  return{
    type: REGISTER_REQUESTER,
    payload: {name, email, password}
  }
}
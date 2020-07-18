import { all, takeLatest, call, put } from "redux-saga/effects";
import { AUTH } from '../../../services/api';
import { SIGN_IN_REQUEST, REGISTER_REQUESTER, SIGN_OUT_REQUEST } from '../actionTypes';
import { signInSuccess, signFailure } from '../actions/AuthActions';
import History from '../../../services/history';
import Swal from 'sweetalert2';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    debugger
    const response = yield call(AUTH.post, "session", {
      email,
      password
    });
    debugger
    const { token } = response.data;

    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dados Inválidos',
      })
      return;
    }

    AUTH.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Dados Corretos!',
      showConfirmButton: false,
      timer: 1500
    })

    History.push('/home');

  } catch (err) {
    alert('Erro na Autenticação!')
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(AUTH.post, 'users', {
      name,
      email,
      password
    });

    History.push('/');

  } catch (err) {
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    AUTH.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Sessão encerrada!',
    showConfirmButton: false,
    timer: 1500
  })
  
  History.push('/');
}


export default all([
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(REGISTER_REQUESTER, signUp),
  takeLatest(SIGN_OUT_REQUEST, signOut)
]);
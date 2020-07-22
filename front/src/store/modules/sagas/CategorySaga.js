import { all, takeLatest, call, put } from "redux-saga/effects";
import { API_PRODUTO } from '../../../services/api';
import History from '../../../services/history';
import { CATEGORY_REQUEST } from '../actionTypes';
import { category_Sucess, category_failure } from '../actions/CategoryActions';
import Swal from 'sweetalert2';

export function* category_add({ payload }) {
  try {
    const { nome, ImagemUrl } = payload.data;
    const response = yield call(API_PRODUTO.post, "categorias", {
      nome,
      ImagemUrl,
    });

    yield put(category_Sucess(response.data));

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Categoria Cadastrada com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })    

    History.push('/home');
    
  } catch (err) {

    yield put(category_failure());

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Erro ao cadastrar a categoria!',
    })
  }
}


export default all([
  takeLatest(CATEGORY_REQUEST, category_add)
]);
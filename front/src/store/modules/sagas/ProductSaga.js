import { all, takeLatest, call, put } from "redux-saga/effects";
import { API_PRODUTO } from '../../../services/api';
import { REGISTER_PRODUCT_REQUEST } from '../actionTypes';
import { product_Sucess, product_failure } from '../actions/ProductActions';
import Swal from 'sweetalert2';

export function* product_Add({ payload }) {
  try {
    const { nome, descricao, preco, imagemUrl, estoque, dataCadastro, categoria, categoriaId } = payload.data;

    const response = yield call(API_PRODUTO.post, "produtos", {
      nome,
      descricao,
      preco,
      imagemUrl,
      estoque,
      dataCadastro,
      categoria,
      categoriaId
    });

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Produto Cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })

    yield put(product_Sucess(response.data));
  } catch (err) {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Erro ao cadastrar o produto!',
    })

    yield put(product_failure());
  }
}

export default all([
  takeLatest(REGISTER_PRODUCT_REQUEST, product_Add),
]);
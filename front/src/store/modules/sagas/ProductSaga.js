import { all, takeLatest, call, put } from "redux-saga/effects";
import { API_PRODUTO } from '../../../services/api';
import { REGISTER_PRODUCT_REQUEST, REGISTER_PRODUCT_DELETE } from '../actionTypes';
import { product_Sucess, product_failure } from '../actions/ProductActions';
import History from '../../../services/history'
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

    yield put(product_Sucess(response.data));

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Produto Cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
    

  } catch (err) {

    yield put(product_failure());

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Erro ao cadastrar o produto!',
    })
  }
}

export function* product_Delete({ payload }) {
  const { id } = payload;

  const valor = parseInt(id);
  try {
    const response = API_PRODUTO.delete(`produtos/delete/${valor}`);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Produto deletado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })

    yield put(product_Sucess(response));
    
    History.push('/#');

  } catch (err) {
    console.log(err);

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Erro ao deletar o produto!',
    })

    yield put(product_failure());
  }

}

export default all([
  takeLatest(REGISTER_PRODUCT_REQUEST, product_Add),
  takeLatest(REGISTER_PRODUCT_DELETE, product_Delete)
]);
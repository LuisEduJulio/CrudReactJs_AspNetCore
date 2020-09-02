import { all, takeLatest, call, put } from "redux-saga/effects";
import {
  REGISTER_PRODUCT_REQUEST,
  REGISTER_PRODUCT_DELETE,
  REGISTER_PRODUCT_GET,
} from "../actionTypes";
import {
  product_Sucess,
  product_failure,
  product_Get,
} from "../actions/ProductActions";
import { API_PRODUTO } from "../../../services/Api";
import History from "../../../services/history";
import Swal from "sweetalert2";

export function* product_Get_List() {
  try {
    const response = API_PRODUTO.get(`produtos`);

    yield put(product_Get(response));
  } catch (err) {
    console.log(err);

    Swal.fire({
      icon: "error",
      text: "Serviço indisponível!",
    });

    yield put(product_failure());
  }
}

export function* product_Add({ payload }) {
  try {
    const {
      nome,
      descricao,
      preco,
      imagemUrl,
      estoque,
      dataCadastro,
      categoria,
      categoriaId,
    } = payload.data;

    const response = yield call(API_PRODUTO.post, "produtos", {
      nome,
      descricao,
      preco,
      imagemUrl,
      estoque,
      dataCadastro,
      categoria,
      categoriaId,
    });

    yield put(product_Sucess(response.data));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Produto Cadastrado com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (err) {
    yield put(product_failure());

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Erro ao cadastrar o produto!",
    });
  }
}

export function* product_Delete({ payload }) {
  const { id } = payload;

  const valor = parseInt(id);
  try {
    const response = API_PRODUTO.delete(`produtos/delete/${valor}`);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Produto deletado com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });

    yield put(product_Sucess(response));

    History.push("/#");
  } catch (err) {
    console.log(err);

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Erro ao deletar o produto!",
    });

    yield put(product_failure());
  }
}

export default all([
  takeLatest(REGISTER_PRODUCT_GET, product_Get_List),
  takeLatest(REGISTER_PRODUCT_REQUEST, product_Add),
  takeLatest(REGISTER_PRODUCT_DELETE, product_Delete),
]);

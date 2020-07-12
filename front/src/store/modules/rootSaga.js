import { all } from 'redux-saga/effects';

import auth from './sagas/AuthSaga';
import product from './sagas/ProductSaga';

export default function* rootSaga() {
  return yield all([auth, product]);
}
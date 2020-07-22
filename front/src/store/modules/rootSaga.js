import { all } from 'redux-saga/effects';

import auth from './sagas/AuthSaga';
import product from './sagas/ProductSaga';
import category from './sagas/CategorySaga';

export default function* rootSaga() {
  return yield all([auth, product, category]);
}
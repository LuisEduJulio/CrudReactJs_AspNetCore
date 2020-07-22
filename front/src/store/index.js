import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from "redux-persist";

import rootReducer from './modules/rootReducers';
import rootSaga from './modules/rootSaga';
import persistReducers from './modules/persistReducers';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
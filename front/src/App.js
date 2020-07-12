import React from 'react';
import History from './services/history';
import { Router } from 'react-router-dom';
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import Routes from './routes';
import 'dotenv/config';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={History}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

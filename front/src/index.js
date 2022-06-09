import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, } from "redux";
import createSagaMidleware from "redux-saga";
import reducer from "./rootReducer";
import rootSaga from "./rootSaga";
import './index.css';
import App from './App';

const sagaMidleware = createSagaMidleware();
const middleware = applyMiddleware(sagaMidleware);

const store = createStore(reducer, middleware);
sagaMidleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



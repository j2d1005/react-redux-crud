import React from 'react';
import ReactDOM from 'react-dom';
// createStore 와 루트 리듀서 불러오기
import { createStore } from "redux";
import rootReducer from "./store/modules"
//(1) Provider 불러오기
import {Provider} from "react-redux";

import App from './App';
import GlobalStyled from "./assets/GlobalStyles";
import "./assets/index.css"

//스토어 만들고 현재 값 확인
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
//console.log(store.getState());

//(2) Provider 랜더링해서 기존 App 에 감싸주기 and store 저장
ReactDOM.render(
    <Provider store={store}>
        <GlobalStyled />
        <App />
    </Provider>,
    document.getElementById('root'));
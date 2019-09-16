import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import rootReducer from "./modules"
import {Provider} from "react-redux";
import App from './App';
// import "./assets/index.css"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
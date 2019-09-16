import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';

// Redux 관련 불러오기
import { createStore } from 'redux'
import rootReducer from './store/modules';

import { Provider } from 'react-redux';

// 스토어 생성
// 인자로 리듀서를 받는다.
// 두번째 인자는 크롬에서 redux devtools 를 사용 하기 위해 넣은 것 
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore( rootReducer, devTools );
// console.log(store.getState());


// provider는 react-redux 라이브러리에 연동되어 있는 컴포넌트. 
// 리액트 앱에 store를 쉽게 연동할 수 있게 해준다.
// store를 연동할 컴포넌트를 Provider 컴포넌트로 감싸고 Provider에 store를 props로 준다.

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
//기존의 App 컴포넌트를 AppContainer 컴포넌트로 교체 
// AppContainer에서 모든 처리를 하고 그 내부의 프레젠테이셔널 컴포넌트는 뷰만 담당한다.!

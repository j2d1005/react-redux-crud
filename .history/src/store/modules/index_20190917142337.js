import { combineReducers } from 'redux';
import crud from "./crud";

// combineReducers 함수로 리듀서들을 합쳐준다.
export default combineReducers({
    crud,
    //다른 리듀서를 만들게되면 여기에 넣어준다
});

/* 합친 값!
{
    counter: {
        color: "red",
        number: 0,
    },
    //다른 리듀서 초기값들
}
 */
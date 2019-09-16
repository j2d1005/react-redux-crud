import { combineReducers } from 'redux';
import crud from "./crud";

export default combineReducers({
    crud,
    asf
    //다른 리듀서를 만들게되면 여기에 넣어준다
});

/* 합치면 초기값이 아래처럼..
{
    counter: {
        color: "red",
        number: 0,
    },
    //다른 리듀서 초기값들
}
 */
import { createAction, handleActions } from "redux-actions";

//액션타입정의 :
const SELECT = "manage/SELECT"; //선택한 글 읽기
const CREATE = "manage/CREATE"; //생성
const UPDATE = "manage/UPDATE"; //수정
const DELETE = "manage/DELETE"; //삭제
const MODE = "manage/MODE";

let id = 3;
export const select = createAction(SELECT, current => current);
export const createList = createAction(CREATE, (title, desc) => ({ title, desc, id: id++ }));
export const updateList = createAction(UPDATE, (id, title, desc) => ({ id, title, desc }));
export const deleteList = createAction(DELETE, id => id);
export const modeChange = createAction(MODE, text => text);

const initialState = {
    current: 0, //현재 선택된 탭 index
    contents: [
        {
            id: 0,
            title: "HTML",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            id: 1,
            title: "CSS",
            desc: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
        },
        {
            id: 2,
            title: "Javascript",
            desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
        },
    ],
    mode: "read",
};

export default handleActions({
    [SELECT]: (state, action) => ({
        ...state,
        current: action.payload
    }),
    [CREATE]: (state, action) => ({
        ...state,
        contents: state.contents.concat({
            id: action.payload.id,
            title: action.payload.title,
            desc: action.payload.desc,
        })
    }),
    [UPDATE]: (state, action) => ({
        ...state,
        contents: state.contents.map(
            item =>
                item.id === action.payload.id
                ? {...item, title: action.payload.title, desc: action.payload.desc }
                : item
        ),
    }),
    [DELETE]: (state, action) => ({
        ...state,
        contents: state.contents.filter( item => item.id !== action.payload )
    }),
    [MODE]: (state, action) => ({
        ...state,
        mode: action.payload
    }),

}, initialState);
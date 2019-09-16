import { createAction, handleActions } from "redux-actions";

//액션타입정의 :
const SELECT = "manage/SELECT"; //선택한 글 읽기
const CREATE = "manage/CREATE"; //생성
const UPDATE = "manage/UPDATE"; //수정
const DELETE = "manage/DELETE"; //삭제
const MODE = "manage/MODE";
const CHANGE_INPUT = "manage/CHANGE_INPUT";
const CHANGE_INPUT_TITLE = "manage/CHANGE_INPUT_TITLE";
const CHANGE_INPUT_DESC = "manage/CHANGE_INPUT_DESC";

let id = 3;
export const select = createAction(SELECT, current => current);
export const createList = createAction(CREATE, (title, desc) => ({ title, desc, id: id++ }));
export const updateList = createAction(UPDATE, (id, title, desc) => ({ id, title, desc }));
export const deleteList = createAction(DELETE, id => id);
export const modeChange = createAction(MODE, text => text);
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const changeInputTitle = createAction(CHANGE_INPUT_TITLE, text => text );
export const changeInputDesc = createAction(CHANGE_INPUT_DESC, text => text );

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
    inputTitle: "",
    inputDesc:"",
    input:""
};

export default handleActions({
    [CHANGE_INPUT]: (state, action) => ({
        ...state,
        input: action.payload
    }),
    [CHANGE_INPUT_TITLE]: (state, action) => ({
        ...state,
        inputTitle: action.payload
    }),
    [CHANGE_INPUT_DESC]: (state, action) => ({
        ...state,
        inputDesc: action.payload
    }),
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
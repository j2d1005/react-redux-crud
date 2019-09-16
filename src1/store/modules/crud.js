// import * as types from '../../actions/ActionTypes';
import { createAction, handleActions } from "redux-actions"; // redux-actions 호출

//Ducks구조 = Reducer 파일 안에 액션타입과 액션생성자 함수를 함께 넣어서 관리하고 이를 '모듈'이라고 부른다.

// action의 type을 상수로 선언
const ON_CHANEGE_MODE = "ON_CHANEGE_MODE";
const ON_SELECT = "ON_SELECT";
const ON_CREATE = "ON_CREATE";
const ON_UPDATE = "ON_UPDATE";
const ON_DELETE = "ON_DELETE";


//action 생성자 만들기
//ActionType.js 에서 만든 type을 가진 액션 객체를 만들어 주는 액션 생성자
// 액션에서 사용할 파라미터를 받을 수 있다. 나중에 ex)action.mode 형태로 가져올수 있다.

// export const onChangeMode = (mode) => ({
//     type: types.ON_CHANEGE_MODE,
//     mode
// });
// export const onSelect = (idx) => ({
//     type: types.ON_SELECT,
//     idx
// });
// export const onCreate = (createData) => ({
//     type: types.ON_CREATE,
//     createData
// });
// export const onUpdate = (updateData) => ({
//     type: types.ON_UPDATE,
//     updateData
// });
// export const onDelete = () => ({
//     type: types.ON_DELETE
// });
export const onChangeMode = createAction(ON_CHANEGE_MODE, mode => mode);
export const onSelect = createAction(ON_SELECT, idx => idx);
export const onCreate = createAction(ON_CREATE, createData => createData);
export const onUpdate = createAction(ON_UPDATE, updateData => updateData);
export const onDelete = createAction(ON_DELETE);
// 첫번째 인자는 액션타입
// 두번째 인자는 payloadCreator,  payload를 어떻게 정할 지 설정하는 것.
// payload => payload 가 기본값이라 생략도 가능하지만 함수가 어떤 파라미터를 받아야 하는지 몰라서 가독성이 떨어진다.


// 초기 state 정의 
const initialState = {
    maxId : 3,
    selectId : 0 ,
    mode: 'welcome',    
    welcome: {title:'welcome', desc:'Hello React'},
    subject: { title:'WEB', sub:'World Wide Web' },
    contents: [
        {id:0, title:'HTML', desc:'HTML is for information'},
        {id:1, title:'CSS', desc:'CSS is for design'},
        {id:2, title:'JAVA SCRIPT', desc:'JAVA SCRIPT is fo interactive'}
    ]
};

// 리듀서 정의
export default handleActions({
    // 액션타입에 접두사가 있으면 [] 없으면 생략가능
    [ON_CHANEGE_MODE]: (state, action) => ({
        ...state,
        mode: action.payload // payload란 redux-actions에서 ~~
    }),
    [ON_SELECT]: (state, action) => ({
        ...state,
        selectId: action.payload
    }), 
    [ON_CREATE]: (state, action) => ({
        ...state,
        contents : state.contents.concat({ 
            id: state.maxId++, ...action.payload}),
        selectId : state.maxId-1,
        mode : "read"
    }),
    [ON_UPDATE]: (state, action) => ({
        ...state,
        contents : state.contents.map(
            content => content.id === state.selectId
                ? { ...content, ...action.payload }
                : content
        ),
        mode : "read"
    }),
    [ON_DELETE]: (state) => ({
        ...state,
        contents : state.contents.filter(
            content => content.id !== state.selectId
        ),
        mode : "welcome"
    })
}, initialState);


// 리듀서는 state와 action을 파라미터로 받는다 .
// action.type에 따라 작업을 하고 새 state를 반환한다. 
// function reducers(state = initialState, action) { // state가 undefined일때 initialState를 기본으로 사용한다.
//     console.log(action);

//     switch (action.type) {
//         case types.ON_CHANEGE_MODE:
//             return {
//                 ...state,
//                 mode: action.mode
//             };

//         case types.ON_SELECT:
//             return {
//                 ...state,
//                 selectId : action.idx
//             };
//             // if(state.selectId === action.idx){
//             //     console.log('same');
//             //     return{
//             //         ...state
//             //     }
//             // }else{
//             //     return {
//             //         ...state,
//             //         selectId : action.idx
//             //     };
//             // }            

//         case types.ON_CREATE:
//                 // const newContents = state.contents.concat({ id: state.maxId++, ...action.createData});
//                 // const newSelectId = state.maxId-1;
//             return {                
//                 ...state,
//                 contents : state.contents.concat({
//                     id: state.maxId++,
//                     ...action.createData
//                 }),
//                 selectId : state.maxId-1,
//                 mode : "read"
//             };
        
//         case types.ON_UPDATE:
//             const updateContents = state.contents.map(
//                 content => content.id === state.selectId
//                 ? { ...content, ...action.updateData }
//                 : content
//             );
//             return {
//                 ...state,
//                 contents : updateContents,
//                 mode : "read"
//             };
        
//         case types.ON_DELETE:
//             const deleteContents = state.contents.filter(content => content.id !== state.selectId);
//             console.log('deleteContents - ' +deleteContents);
//             return {
//                 ...state,
//                 contents : deleteContents,
//                 mode : "welcome"
//             }
        
//         default:
//                 return state;
//     }
// }

// export default reducers;
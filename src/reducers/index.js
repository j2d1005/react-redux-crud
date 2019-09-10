import * as types from '../actions/ActionTypes';

// 초기 state 정의 
const initialState = {
    maxId : 3,
    selectId : null ,
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
// 리듀서는 state와 action을 파라미터로 받는다 .
// action.type에 따라 작업을 하고 새 state를 반환한다. 
function reducers(state = initialState, action) { // state가 undefined일때 initialState를 기본으로 사용한다.
    console.log(action);

    switch (action.type) {
        case types.ON_CHANEGE_MODE:
            return {
                ...state,
                mode: action.mode
            };

        case types.ON_SELECT:
            return {
                ...state,
                selectId : action.idx
            };
            // if(state.selectId === action.idx){
            //     console.log('same');
            //     return{
            //         ...state
            //     }
            // }else{
            //     return {
            //         ...state,
            //         selectId : action.idx
            //     };
            // }            

        case types.ON_CREATE:
                const newContents = state.contents.concat({ id: state.maxId++, ...action.createData});
                const newSelectId = state.maxId-1;
            return {                
                ...state,
                contents : newContents,
                selectId : newSelectId,
                mode : "read"
            };
        
        case types.ON_UPDATE:
            const updateContents = state.contents.map(
                content => content.id === state.selectId
                ? { ...content, ...action.updateData }
                : content
            );
            return {
                ...state,
                contents : updateContents,
                mode : "read"
            };
        
        case types.ON_DELETE:
            const deleteContents = state.contents.filter(content => content.id !== state.selectId);
            console.log('deleteContents - ' +deleteContents);
            return {
                ...state,
                contents : deleteContents,
                mode : "welcome"
            }
        
        default:
                return state;
    }
}

export default reducers;
//action 생성자 만들기

import * as types from './ActionTypes';

//ActionType.js 에서 만든 type을 가진 액션 객체를 만들어 주는 액션 생성자
// 액션에서 사용할 파라미터를 받을 수 있다. 나중에 ex)action.mode 형태로 가져올수 있다.

export const onChangeMode = (mode) => ({
    type: types.ON_CHANEGE_MODE,
    mode
});

export const onSelect = (idx) => ({
    type: types.ON_SELECT,
    idx
});

export const onCreate = (createData) => ({
    type: types.ON_CREATE,
    createData
});

export const onUpdate = (updateData) => ({
    type: types.ON_UPDATE,
    updateData
});

export const onDelete = () => ({
    type: types.ON_DELETE
});
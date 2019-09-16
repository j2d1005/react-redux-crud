import React, {Component} from 'react';
import App from '../components/App';
import { connect } from 'react-redux';
// container 컴포넌트를 store에 연결 시키려면 react-redux의 connect 함수를 사용해야 한다.
import { bindActionCreators } from "redux"; // 추가해줘야해 
import * as crudActions from "../store/modules/crud";

class AppContainer extends Component {

    render(){
        const { selectId, mode, welcome, subject, contents } = this.props;
        return(
            <>
                <App
                    mode = {mode}
                />
            </>
        );
    }

}
//store 안의 state값을 props로 받음
const mapStateToProps = ({crud}) => ({
    mode: crud.mode,    
});

// // 액션 생성자를 사용하여 액션을 생성하고,
// // 해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
// const mapDispatchToProps = (dispatch) => ({
//     onChangeMode: (mode) => dispatch(actions.onChangeMode(mode)),
//     // 액션 함수를 인자로 받은 디스패치를 onChangeMode에 담았다.
//     onSelect: (idx) => dispatch(actions.onSelect(idx)),
//     onCreate: (createData) => dispatch(actions.onCreate(createData)),
//     onUpdate: (updateData) => dispatch(actions.onUpdate(updateData)),
//     onDelete: () => dispatch(actions.onDelete()),
// });
const mapDispatchToProps = dispatch => ({
    CrudActions: bindActionCreators(crudActions, dispatch) // 액션들을 한줄로 표시
});

// App 컴포넌트의 Container 컴포넌트
// App 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 한다.
// 파라미터로 컴포넌트에 연결시킬 store의 state와 action함수들을 전달한다.
// const AppContainer = connect(
//     mapStateToProps, // 뷰를 위해서 state를 받고 App에 전달하여 렌더링되어 ui가 바뀐다.
//     mapDispatchToProps  // 액션을 연결시켜주는 함수를 만들어서 App에 전달
// )(App); // App = 프레젠테이셔널 컴포넌트

// export default AppContainer;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
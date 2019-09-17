import React, {Component} from 'react';
import App from '../components/App';
import { connect } from 'react-redux';
// container 컴포넌트를 store에 연결 시키려면 react-redux의 connect 함수를 사용해야 한다.
// 액션안써서 생략
// import { bindActionCreators } from "redux"; // 추가해줘야해 
// import * as crudActions from "../store/modules/crud"; 

class AppContainer extends Component {

    render(){
        const { mode } = this.props;
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
// const mapDispatchToProps = dispatch => ({
//     CrudActions: bindActionCreators(crudActions, dispatch) // 액션들을 한줄로 표시
// });

// export default AppContainer;
export default connect(
    mapStateToProps,
    // mapDispatchToProps  // 액션안받아도 되어서 생략
)(AppContainer);
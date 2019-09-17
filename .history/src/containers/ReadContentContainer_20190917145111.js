import React, {Component} from 'react';
import ReadContent from '../components/ReadContent';
import { connect } from 'react-redux'; // container 컴포넌트를 store에 연결하는 역할
import { bindActionCreators } from "redux"; 
import * as crudActions from "../store/modules/crud";

class ReadContentContainer extends Component {
    changeMode = (mode) => {
        const { CrudActions } = this.props;
        CrudActions.onChangeMode(mode);
        // this.props.onChangeMode(mode);
    }
    deletee = () => {
        const { CrudActions } = this.props;
        CrudActions.onDelete();
        // this.props.onDelete();
    }

    render(){
        const { mode, welcome, contents, selectId } = this.props;
        return(
            <>
                <ReadContent
                    mode = {mode}
                    welcome = {welcome}
                    contents = {contents}
                    selectId = {selectId}
                    onChangeMode = {this.changeMode}
                    onDelete = {this.deletee}
                />
            </>
        );
    }

}

//store 안의 state값을 props로 받음
const mapStateToProps = ({crud}) => ({
    mode: crud.mode,
    welcome: crud.welcome,
    contents: crud.contents,
    selectId: crud.selectId,
});
const mapDispatchToProps = dispatch => ({
    CrudActions: bindActionCreators(crudActions, dispatch) // 액션들을 한줄로 표시
    // const mapDispatchToProps = { onChangeMode, onDelete };
    // 이렇게 액션생성자 객체를 바로 전달해주면 자동으로 bindActionCreators를 해준다.
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReadContentContainer);
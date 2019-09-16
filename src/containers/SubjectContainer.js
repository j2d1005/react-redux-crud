import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"; 
import * as crudActions from "../store/modules/crud";
import Subject from '../components/Subject';


class SubjectContainer extends Component {
    changeMode = (mode) => {
        const { CrudActions } = this.props;
        CrudActions.onChangeMode(mode);
    };

    render(){
        const { subject } = this.props;
        return(
            <>
                <Subject
                    subject = {subject}
                    onChangeMode = {this.changeMode}
                />
            </>
        );
    }

}
//store 안의 state값을 props로 받음
const mapStateToProps = ({crud}) => ({
    subject: crud.subject,
});
const mapDispatchToProps = dispatch => ({
    CrudActions: bindActionCreators(crudActions, dispatch) // 액션들을 한줄로 표시
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubjectContainer);
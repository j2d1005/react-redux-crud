import React, {Component} from 'react';
import Form from "../components/Form";
import {bindActionCreators} from "redux";
import * as manageActions from "../store/modules/manage";
import {connect} from "react-redux";

class CreateContainer extends Component {
    handleSubmit = e => {
        const { ManageActions, inputTitle, inputDesc, contents } = this.props;
        e.preventDefault();
        ManageActions.createList(
            inputTitle,
            inputDesc
        );
        ManageActions.select(contents.length);
        ManageActions.modeChange("read");
        ManageActions.changeInputTitle("");
        ManageActions.changeInputDesc("");
        //console.log(this.props.inputTitle, this.props.inputDesc);
    };
    handleChangeTitle = e => {
        const { ManageActions } = this.props;
        ManageActions.changeInputTitle(e.target.value);
    };
    handleChangeDesc = e => {
        const { ManageActions } = this.props;
        ManageActions.changeInputDesc(e.target.value);
    };
    handleChange = e => {
        const { ManageActions } = this.props;
        ManageActions.changeInput({[e.target.name] : e.target.value});
        //[e.target.name] : e.target.value
    };
    handleMode = text => {
        const { ManageActions } = this.props;
        ManageActions.modeChange(text);
    };
    render() {
        const { inputDesc, inputTitle, mode } = this.props;
        return (
            <Form
                inputDesc={inputDesc}
                inputTitle={inputTitle}
                mode={mode}
                onChangeTitle={this.handleChangeTitle}
                onChangeDesc={this.handleChangeDesc}
                onSubmit={this.handleSubmit}
                onMode={this.handleMode}
            />
        );
    }
}

const mapStateToProps = ({manage}) => ({
    contents: manage.contents,
    current: manage.current,
    mode: manage.mode,
    input: manage.input,
    inputTitle: manage.inputTitle,
    inputDesc: manage.inputDesc,
});

const mapDispatchToProps = dispatch => ({
    ManageActions: bindActionCreators(manageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContainer);
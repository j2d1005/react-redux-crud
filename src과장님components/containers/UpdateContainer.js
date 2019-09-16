import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as manageActions from "../store/modules/manage";
import Form from "../components/Form";

class UpdateContainer extends Component {

    componentDidMount() {
        const { ManageActions, contents, current } = this.props;
        ManageActions.changeInputTitle(contents[current].title);
        ManageActions.changeInputDesc(contents[current].desc);
    }

    handleSubmit = e => {
        const { ManageActions, inputTitle, inputDesc, contents, current } = this.props;
        e.preventDefault();
        ManageActions.updateList(
            contents[current].id,
            inputTitle,
            inputDesc
        );
        ManageActions.changeInputTitle("");
        ManageActions.changeInputDesc("");
        ManageActions.modeChange("read");
        console.log(inputTitle, inputDesc);
    };
    handleChangeTitle = e => {
        const { ManageActions } = this.props;
        ManageActions.changeInputTitle(e.target.value);
    };
    handleChangeDesc = e => {
        const { ManageActions } = this.props;
        ManageActions.changeInputDesc(e.target.value);
    };
    handleMode = text => {
        const { ManageActions } = this.props;
        ManageActions.modeChange(text);
    };

    render() {
        const { mode, inputTitle, inputDesc } = this.props;
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
    inputTitle: manage.inputTitle,
    inputDesc: manage.inputDesc,
});

const mapDispatchToProps = dispatch => ({
    ManageActions: bindActionCreators(manageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateContainer);
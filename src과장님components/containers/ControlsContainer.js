import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Controls from "../components/Controls";
import CreateContainer from "./CreateContainer";
import * as manageActions from "../store/modules/manage";


class ControlsContainer extends Component {
    handleDelete = () => {
        const { current, contents, ManageActions } = this.props;
        let modal = false;
        window.confirm("Really??") ? modal = true : modal = false;
        if( ! modal ) return;
        ManageActions.deleteList(contents[current].id); //현재 선택된 item 의 id 값을 넘겨줌
        if( current === contents.length - 1 ) ManageActions.select(contents.length - 2); //마지막컨텐츠 선택했을 때 오류방지
        if( contents.length === 1 ) ManageActions.modeChange("welcome"); //다지우면 모드체인지
    };
    handleMode = text => {
        const { ManageActions } = this.props;
        ManageActions.modeChange(text);
    };

    render() {
        const { mode } = this.props;
        return (
            <>
                {mode === "create" && (
                    <CreateContainer />
                )}
                <Controls
                    onDelete={this.handleDelete}
                    onMode={this.handleMode}
                />
            </>
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
)(ControlsContainer);
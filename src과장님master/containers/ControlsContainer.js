import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as manageActions from "../modules/manage";
import Controls from "../components/Controls";

const ControlsContainer = ({ current, contents, ManageActions }) => {
    const handleDelete = () => {
        let modal = false;
        window.confirm("Really??") ? modal = true : modal = false;
        if( ! modal ) return;
        ManageActions.deleteList(contents[current].id); //현재 선택된 item 의 id 값을 넘겨줌
        if( current === contents.length - 1 ) ManageActions.select(contents.length - 2); //마지막컨텐츠 선택했을 때 오류방지
        if( contents.length === 1 ) ManageActions.modeChange("welcome"); //다지우면 모드체인지
    };
    const handleMode = text => {
        ManageActions.modeChange(text);
    };
    return (
        <>
            <Controls
                onDelete={handleDelete}
                onMode={handleMode}
            />
        </>
    );
};

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
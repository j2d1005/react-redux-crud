import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as manageActions from "../modules/manage";
import Tab from "../components/Tab";
// import UpdateContainer from "./UpdateContainer";
// import CreateContainer from "./CreateContainer";
import FormContainer from "./FormContainer";

const AppsContainer = ({ ManageActions, mode, current, contents, }) => {
    const handleSelect = current => {
        ManageActions.select(current);
    };
    return (
        <>
            {mode === "welcome" && <p style={{margin:"60px 0",textAlign:"center"}}>컨텐츠를 추가하세요!</p>}
            {mode === "read" &&
                <Tab
                    mode={mode}
                    current={current}
                    contents={contents}
                    onSelect={handleSelect}
                />
            }
            {/*{mode === "update" && <UpdateContainer /> }*/}
            {/*{mode === "create" && <CreateContainer /> }*/}
            {( mode === "create" || mode === "update" ) && <FormContainer /> }
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

// const mapDispatchToProps = dispatch => ({
//     select: current => dispatch(select(current)),
// });
const mapDispatchToProps = dispatch => ({
    ManageActions: bindActionCreators(manageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppsContainer);
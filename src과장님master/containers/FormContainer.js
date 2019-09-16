import React, { useState, useEffect, useRef } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as manageActions from "../modules/manage";
import Form from "../components/Form";

const FormContainer = ({ ManageActions, mode, contents, current }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const blankCheck = useRef();

    useEffect(() => {
        if( mode === "update" ){
            setTitle(contents[current].title);
            setDesc(contents[current].desc);
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if( title === "" ){
            alert("제목을 입력하세요!");
            blankCheck.current.focus();
            return;
        }
        if( mode === "create" ){
            ManageActions.createList(title, desc );
            ManageActions.select(contents.length);
        }
        if( mode === "update" ){
            ManageActions.updateList(contents[current].id, title, desc );
        }
        ManageActions.modeChange("read");
    };
    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };
    const handleChangeDesc = e => {
        setDesc(e.target.value);
    };
    const handleMode = text => {
        ManageActions.modeChange(text);
    };
    return (
        <Form
            title={title}
            desc={desc}
            mode={mode}
            onChangeTitle={handleChangeTitle}
            onChangeDesc={handleChangeDesc}
            onSubmit={handleSubmit}
            onMode={handleMode}
            blankCheck={blankCheck}
        />
    );
};

const mapStateToProps = ({manage}) => ({
    contents: manage.contents,
    current: manage.current,
    mode: manage.mode,
});

const mapDispatchToProps = dispatch => ({
    ManageActions: bindActionCreators(manageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);
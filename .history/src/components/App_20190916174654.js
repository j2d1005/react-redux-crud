import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SubjectContainer from "../containers/SubjectContainer";
import TocInfoListContainer from "../containers/TocInfoListContainer";
import ReadContentContainer from "../containers/ReadContentContainer";
// import Form from "./Form"
import FormContainer from '../containers/FormContainer';

// 프레젠테이셔널 컴포넌트 // 그래서 함수형으로 작성했음.
const App = ({ mode }) => {
    return (
        <div className="App">
            <SubjectContainer />
            <TocInfoListContainer />
            {(mode === "read" || mode ==="welcome") && 
                <ReadContentContainer />
            }
            {(mode === "create" || mode ==="update") &&
                <FormContainer />
            }              
        </div>
    )
}

export default App;

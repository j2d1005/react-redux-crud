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
// // 받아올 props 의 타입을 지정
// App.propTypes = {
//     maxId: PropTypes.number,
//     selectId: PropTypes.number,
//     mode: PropTypes.string,
//     welcome: PropTypes.object,
//     subject: PropTypes.object,
//     contents: PropTypes.array,
//     onChangeMode: PropTypes.func,
//     onSelect: PropTypes.func,
//     onCreate: PropTypes.func,
//     onUpdate: PropTypes.func,
//     onDelete: PropTypes.func
// };
// // props의 default값
// App.defaultProps = {
//     maxId: 3,
//     selectId : null,
//     mode: 'welcome',
//     welcome: { title:'welcome', desc:'Hello React' },
//     subject: { title:'WEB', sub:'World Wide Web' },
//     contents: [
//         {id:0, title:'제목', desc:'내용'},
//     ],
//     onChangeMode: () => console.warn('onChangeMode not defined'),
//     onSelect: () => console.warn('onSelect not defined'),
//     onCreate: () => console.warn('onCreate not defined'),
//     onUpdate: () => console.warn('onUpdate not defined'),
//     onDelete: () => console.warn('onDelete not defined')
// };

export default App;
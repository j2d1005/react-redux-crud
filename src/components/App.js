import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Subject from "./Subject";
import TocInfoList from "./TocInfoList";
import ReadContent from "./ReadContent";
import Form from "./Form"

// 프레젠테이셔널 컴포넌트 // 그래서 함수형으로 작성했음.
const App = ({ selectId, mode, welcome, subject, contents, onChangeMode, onSelect, onCreate, onUpdate, onDelete }) => {
    return (
        <div className="App">
            <Subject
                  title={subject.title}
                  sub={subject.sub}
                  onChangeMode={onChangeMode}
              />
               <TocInfoList
                  mode={mode}
                  contents={contents}
                  selectId={selectId}
                  onChangeMode={onChangeMode}
                  onSelect={onSelect}
              />
              {(mode === "read" || mode ==="welcome") && // read와 welcome일 때는 ReadContent를 호출한다.
                  <ReadContent
                      mode={mode}
                      welcome={welcome}
                      contents={contents}
                      selectId={selectId}
                      onChangeMode={onChangeMode}
                      onDelete={onDelete}
                  />
              }
              {(mode === "create" || mode ==="update") &&
                  <Form 
                      onChangeMode={onChangeMode}
                      onCreate={onCreate}
                      onUpdate={onUpdate}
                      mode={mode}
                      selectId={selectId}
                      contents={contents}
                  />
              }
              
        </div>
    )
}
// 받아올 props 의 타입을 지정
App.propTypes = {
    maxId: PropTypes.number,
    selectId: PropTypes.number,
    mode: PropTypes.string,
    welcome: PropTypes.object,
    subject: PropTypes.object,
    contents: PropTypes.array,
    onChangeMode: PropTypes.func,
    onSelect: PropTypes.func,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func
};
// props의 default값
App.defaultProps = {
    maxId: 3,
    selectId : null,
    mode: 'welcome',
    welcome: { title:'welcome', desc:'Hello React' },
    subject: { title:'WEB', sub:'World Wide Web' },
    contents: [
        {id:0, title:'제목', desc:'내용'},
    ],
    onChangeMode: () => console.warn('onChangeMode not defined'),
    onSelect: () => console.warn('onSelect not defined'),
    onCreate: () => console.warn('onCreate not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
    onDelete: () => console.warn('onDelete not defined')
};

export default App;

import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import TocInfoList from "./components/TocInfoList";
import ReadContent from "./components/ReadContent";
import Form from "./components/Form"


class App extends Component {
  
  maxId = 3;
  state = {
    mode: 'welcome',
    welcome: {title:'welcome', desc:'Hello React'},
    subject: { title:'WEB', sub:'World Wide Web' },
    selectId : 0 ,
    contents: [
        {id:0, title:'HTML', desc:'HTML is for information'},
        {id:1, title:'CSS', desc:'CSS is for design'},
        {id:2, title:'JAVA SCRIPT', desc:'JAVA SCRIPT is fo interactive'}
    ],

  };
  onChangeMode = (mode) => {
      this.setState({
          mode:mode
      })
  };
  onSelect = (idx) => {
      this.setState({
          selectId : idx
      })
  };
  onCreate = (createData) => {
      const { contents } = this.state;
      this.setState({               // maxId 가 일단 들어가고 그다음 부터 ++됨 
          contents : contents.concat({ id: this.maxId++, ...createData }),
//          mode : 'read',
//          selectId : this.maxId
      });
      this.onSelect(this.maxId-1); // maxId가 length보다 1 큼
      this.onChangeMode('read');
  };

  onUpdate = (updateData) => {
      const { contents, selectId } = this.state;
      this.setState({
          contents : contents.map(
              content => content.id === selectId
                        ? { ...content, ...updateData }
                        : content
          ),
          mode : 'read'
      });
  };
  onDelete = () => {
      let { selectId, contents } = this.state;
      this.setState({
          contents: contents.filter(content => content.id !== selectId),
          mode : 'welcome',
      });
  };

  render(){
      // console.log(this.state.selectId);
      const { title, sub } = this.state.subject;
      const { mode, welcome, contents, selectId } = this.state;
      // const filterContents = contents.filter(  //  contents 배열에서 mode가 read인 것들만 전달
      //     contents => contents.mode === 'read'
      // );
      return (
          <div className="App">
              <Subject
                  title={title}
                  sub={sub}
                  onChangeMode={this.onChangeMode}
              />
              <TocInfoList
                  mode={mode}
                  contents={contents}
                  selectId={selectId}
                  onChangeMode={this.onChangeMode}
                  onSelect={this.onSelect}
              />
              {(mode === "read" || mode ==="welcome") && // read와 welcome일 때는 ReadContent를 호출한다.
                  <ReadContent
                      mode={mode}
                      welcome={welcome}
                      contents={contents}
                      selectId={selectId}
                      onChangeMode={this.onChangeMode}
                      onDelete={this.onDelete}
                  />
              }
              {(mode === "create" || mode ==="update") &&
                  <Form 
                      onChangeMode={this.onChangeMode}
                      onCreate={this.onCreate}
                      onUpdate={this.onUpdate}
                      mode={mode}
                      selectId={selectId}
                      contents={contents}
                  />
              }
              

          </div>
      );
  }

}

export default App;

import React, { Component } from 'react';

import './Form.css'

class Form extends Component{
    constructor(props){
        super(props);
        const { contents, selectId } = this.props;
        const content = contents.filter(content => content.id === selectId); // selectId와 id가 같은 contents만 남긴다.

        this.props.mode === "create"
            ? this.state ={
                title : "",
                desc : ""
            }
            : // update일 때
            this.state = {
                id : content[0].id,
                title : content[0].title,
                desc : content[0].desc
            }

    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
            {this.state.title === ""
                ? ( alert('title을 입력하세요.') )
                : ( this.state.desc === ""
                    ? alert('desc를 입력하세요')
                    : (
                        this.props.mode === "create"
                        ? this.props.onCreate(this.state) // create 일 때
                        : this.props.onUpdate(this.state) // update 일 때
                    )
                )
            }
    };
    // componentDidUpdate(prevProps, prevState) { // 렌더 뒤에 호출
    //     const { contents, selectId } = this.props;
    //     const content = contents.filter(content => content.id === selectId); // selectId와 id가 같은 contents만 남긴다.
    //     if( prevProps.mode !== this.props.mode ){
    //         // console.log(prevProps.mode, this.props.mode);
    //         if( this.props.mode === "create" ) {
    //             this.setState({
    //                 // id: contents.length,
    //                 id: contents.length,
    //                 title: "",
    //                 desc: ""
    //             });
    //         }else{
    //             this.state = {
    //                 id : content[0].id,
    //                 title : content[0].title,
    //                 desc : content[0].desc
    //             }
    //         }
    //     }
    // }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     // 렌더 전에 온다고 시점이 달랃잘라!!!!
    //     // https://velopert.com/3631
    //     const { contents, selectId } = nextProps;
    //     const content = contents.filter(content => content.id === selectId);
    //     if( nextProps.mode !== prevState.mode ) {
    //         if(nextProps.mode === 'update'){
    //             return {
    //                 // props 가 바뀔 때 설정하고 설정하고 싶은 state 를 return
    //                 // setState 노노
    //                 mode: nextProps.mode,
    //                 title : content[0].title,
    //                 des : content[0].desc
    //             }
    //         }else{
    //             return {
    //                 mode: nextProps.mode,
    //                 id: contents.length,
    //                 title: "",
    //                 desc: ""
    //             }
    //         }
    //     }
    //     // return null 해줘야한데!!
    //     return null;
    //     // 따로 업데이트 할 것은 없다~~~ 라는 뜻이라는군!!!
    // }
    render(){
        console.log('render Form = ' + this.props.mode);

        const { onChangeMode, mode } = this.props;
        const { title, desc } = this.state;
        return (
            <div>
                <h2>{mode === "create" ? "CREATE" : "UPDATE"}</h2>
                <form className="form" onSubmit={this.onSubmit}>
                    <div>
                        <input type="text"
                               name="title"
                               placeholder="제목 입력"
                               value={title}
                               onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <textarea name="desc"
                                  placeholder="내용 입력"
                                  value={desc}
                                  onChange={this.onChange}
                                    
                        />
                    </div>
                    <div className="btn_wrap">
                        <button type="submit">등록</button>
                        <button type="button"
                                onClick={(e)=>{
                                    e.preventDefault();
                                    onChangeMode('read');
                                }}
                        >
                        취소</button>
                    </div>
                </form>
            </div>
        )

    }
}

export default Form;
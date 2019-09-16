import React, { Component } from 'react';

import './Form.css'

class Form extends Component{

    render(){
        console.log('render Form = ' + this.props.mode);
        console.log();
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
import React, { Component } from 'react';

import './Form.css'

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : "" ,
            desc : ""
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        {this.state.title === ""
            ? ( alert('title을 입력하세요.') )
            : (this.state.desc === ""
                ? alert('desc를 입력하세요')
                : this.props.onCreate(this.state) )
        }
    }
    
    render(){
        const { onChangeMode } = this.props; 
        const { title, desc } = this.state;
        return (
            <div>
                <h2>CREATE</h2>
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
                                    onChangeMode('welcome');
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
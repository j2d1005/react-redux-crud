import React, { Component } from 'react';

class TocInfo extends Component{
    shouldComponentUpdate(newProps, newState){  // info 중에 수정하거나 추가된 요소만 render
        if(this.props.contents === newProps.contents){
            return false;
        }
        else{
            return true;
        }

    }
    static defaultProps = {
        contents: {
            title: '이름',
            id: 0
        }
    };

    render() {
        const style = {
            paddingTop: '15px',
        };
        const { contents, selectId, onChangeMode, onSelect, mode } = this.props;  // 받아온 프롭스
        const { title } = contents;

        console.log('render TocInfo'+ contents.id);

        return (
            <div style={style} className={selectId === contents.id ? "active" : ''}>
                <a href=""
                   onClick={(e)=>{
                       e.preventDefault();
                    //    if(mode !== "read"){
                        onChangeMode('read');
                    //    }
                       onSelect(contents.id);
                   }}>
                {title}</a>
            </div>
        )
    }
}

export default TocInfo;
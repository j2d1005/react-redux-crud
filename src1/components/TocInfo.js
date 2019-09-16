import React, { Component } from 'react';

// should 때문에 class방식으로했음.. 해결법 ????????
class TocInfo extends Component{
    shouldComponentUpdate(newProps, newState){  // info 중에 수정하거나 추가된 요소만 render
        if(this.props.content === newProps.content){
            return false;
        }
        else{
            return true;
        }

    }
    static defaultProps = {
        content: {
            title: '이름',
            id: 0
        }
    };

    render() {
        const style = {
            paddingTop: '15px',
        };
        const { content, onChangeMode, onSelect } = this.props;  // 받아온 프롭스
        const { title } = content;

        console.log('render TocInfo'+ content.id);

        return (
            <div style={style}>
                <a href=""
                   onClick={(e)=>{
                       e.preventDefault();
                        onChangeMode('read');
                       onSelect(content.id);
                   }}>
                {title}</a>
            </div>
        )
    }
}

export default TocInfo;
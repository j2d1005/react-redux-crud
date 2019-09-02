import React, { Component } from 'react';

class TocInfo extends Component{

    static defaultProps = {
        contents: {
            title: '이름',
            id: 0
        }
    }

    render() {
        const style = {
            paddingTop: '15px',
        };
        const { contents, selectId, onChangeMode, onSelect } = this.props;  // 받아온 프롭스
        const { title } = contents;

        console.log('render TocInfo'+ contents.id);

        return (
            <div style={style} className={selectId === contents.id ? "active" : ''}>
                <a href=""
                   onClick={(e)=>{
                       e.preventDefault();
                       onChangeMode('read');
                       onSelect(contents.id);
                   }}>
                {title}</a>
            </div>
        )
    }
}

export default TocInfo;
import React, { Component } from 'react';

class ReadContent extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         contents : this.props.contents,
    //         selectId : this.props.selectId
    //     }
    // }

    render() {
        console.log('render ReadContent');

        const { contents, selectId, mode, welcome, onChangeMode, onDelete } = this.props;  // 받아온 프롭스
        const content = contents.filter(content => content.id === selectId); // selectId와 id가 같은 contents만 남긴다.

        let { title, desc } = contents;                             // content도 배열이라 [0] 해줘야 한다.
        {mode === 'welcome' ? { title, desc } = welcome : { title, desc } = content[0] } // 'welcome' or 'read'
        // 모드에 따라 title 과 desc의 값을 변경 해줌 // title, desc가 바뀌는 값이기에 const말고 let으로 선언
        return (
            <article>
                <h2>{title}</h2>
                <p>{desc}</p>
                {mode === 'read' &&
                    <div className="btn_wrap">
                        <button
                            onClick={()=> {
                                onChangeMode('update')
                            }}
                        >
                        수정</button>
                        <button
                            onClick={onDelete}
                        >
                        삭제</button>
                    </div>
                }
            </article>
        )
    }
}

export default ReadContent;
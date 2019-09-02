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

        const { contents, selectId, mode, welcome } = this.props;  // 받아온 프롭스
        let { title, desc } = contents;
        {mode === 'welcome' ? { title, desc } = welcome : { title, desc } = contents[selectId] }
        // 모드에 따라 title 과 desc의 값을 변경 해줌 // title, desc가 바뀌는 값이기에 const말고 let으로 선언
        return (
            <article>
                <h2>{title}</h2>
                <p>{desc}</p>
                {mode === 'read' &&
                    <div className="btn_wrap">
                        <button>수정</button>
                        <button
                            onClick={this.props.onDelete}
                        >
                        삭제</button>
                    </div>
                }
            </article>
        )
    }
}

export default ReadContent;
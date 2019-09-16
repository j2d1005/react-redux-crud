import React from 'react';

const ReadContent = ({ mode, welcome, contents, selectId, onChangeMode, onDelete }) => {

    console.log('render ReadContent');

    const content = contents.filter(content => content.id === selectId);

    // 'welcome' or 'read'에 따라 title desc가 달라짐
    let { title, desc } = contents;    
    {mode === 'welcome' ? { title, desc } = welcome : { title, desc } = content[0] }
    
    return (
        <article>
                <h2>{title}</h2>
                <p>{desc}</p>
                {/*read 모드일 때 수정과 삭제버튼 등장*/}
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
    );
}

export default ReadContent;
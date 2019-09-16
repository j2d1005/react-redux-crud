import React from 'react';
import TocInfo from './TocInfo'

// const TocInfo = ({content, onChangeMode, onSelect}) => {
    
//     const style = {
//         paddingTop: '15px',
//     };
//     console.log('render TocInfo'+ contents.id);
//     return(
//         <div style={style}>
//             <a href=""
//                 onClick={(e)=>{
//                     e.preventDefault();
//                     onChangeMode('read');
//                     onSelect(content.id);
//                 }}>
//             {content.title}</a>
//         </div>
//     );
// };

//함수방식
const TocInfoList = ({ contents, mode, onSelect, onChangeMode }) => {
    const style = {
        marginTop: '15px'
    };
    const list = contents.map(          // contents 배열에 있는 하나하나를 TocInfo에 담은 list 배열을 생성
        (content) => (  // contents를 인자로 받아서 TocInfo 컴포넌트에 뿌려줌
            <TocInfo
                key={content.id}   // 각각 key값을 설정해줘야 console에 에러가 안남
                content={content}
                onChangeMode={onChangeMode}
                onSelect={onSelect}
            />
        )
    );
    return(
        <div>
            {list}    {/* contents를 담은 TocInfo를 뿌려줌 */}        
            {/*mode가 read나 welcome인 경우에 추가버튼 등장*/} 
            {(mode === "read" || mode ==="welcome") &&
                <button type="button"
                    style = { style }
                    onClick={(e)=>{
                        e.preventDefault();
                        onChangeMode('create');
                    }}>
                추가</button>  
            }        
        </div>
    );
};

export default TocInfoList;
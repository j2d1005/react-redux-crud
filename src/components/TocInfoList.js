import React, { Component } from 'react';
import TocInfo from './TocInfo'
import ReadContent from "./ReadContent";

class TocInfoList extends Component{
    // constructor(props) {
    //     super(props)
    //
    //     this.state = {
    //         contents: this.props.contents,
    //         // filterContents : "",
    //         selectContents: ""
    //     }
    //
    // }

    // componentDidMount() {
    //     const { contents, filterContents } = this.state;
    //     this.setState({
    //         filterContents : contents.filter(
    //             contents => contents.mode === 'read'
    //         )
    //     });
    // }
    static defaultProps = {
        contents: []
    };

    render() {
        console.log('render TocInfoList');
        // console.log(this.showContent);
        const style = {
            marginTop: '15px'
        }
        const { contents, selectId, onChangeMode, onSelect, mode } = this.props;
        const list = contents.map(          // contents 배열에 있는 하나하나를 PhoneInfo에 담은 list 배열을 생성
            (contents) => (                  // contents를 인자로 받아서 PhoneInfo 컴포넌트에 뿌려줌
                <TocInfo
                    key={contents.id}   // 각각 key값을 설정해줘야 console에 에러가 안남
                    contents={contents} // contents라는 이름으로 contents 배열을 PhoneInfo에 전달
                    selectId={selectId}
                    onChangeMode={onChangeMode}
                    onSelect={onSelect}
                />
            )
        );
        return (
            <div>
                {list}    {/* contents를 담은 PhoneInfo를 뿌려줌 */}
            
            {/*mode가 read나 welcome인 경우에 추가버튼 등장*/} 
            {(mode === "read" || mode ==="welcome") &&
                <button type="button"
                    style = { style }
                    onClick={(e)=>{
                       e.preventDefault();
                       onChangeMode('create');;
                    }}>
                추가</button>  
            }
            
            </div>
        )
    }
}

export default TocInfoList;
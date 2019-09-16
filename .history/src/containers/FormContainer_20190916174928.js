import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"; 
import * as crudActions from "../store/modules/crud";
import '../Components/Form.css'


class FormContainer extends Component {
    //여기서만 쓰는 state
    constructor(props){
        super(props);
        const { contents, selectId } = this.props;
        const content = contents.filter(content => content.id === selectId); 

        this.props.mode === "create"
            ? this.state ={
                title : "",
                desc : ""
            }
            : // update일 때
            this.state = {
                id : content[0].id,
                title : content[0].title,
                desc : content[0].desc
            }
    }
    // 여기서만 쓰는 함수들 . 액션으로 안만들었다.
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
            {this.state.title === ""
                ? ( alert('title을 입력하세요.') )
                : ( this.state.desc === ""
                    ? alert('desc를 입력하세요')
                    : (
                        this.props.mode === "create"
                        ? this.create(this.state) // create 일 때
                        : this.update(this.state) // update 일 때
                    )
                )
            }
    };

    // 액션들
    changeMode = (mode) => {
        const { CrudActions } = this.props;
        CrudActions.onChangeMode(mode);
    };
    create = (createData) => {
        const { CrudActions } = this.props;
        CrudActions.onCreate(createData);
    }
    update = (updateData) => {
        const { CrudActions } = this.props;
        CrudActions.onUpdate(updateData);
    }

    render(){
        const { mode } = this.props;
        const { title, desc } = this.state;
        // form 컨테이너 분리하고싶은데 실패해서 하드코딩,, 분리하면 state를 어떻게해야할지모르겠어 
        return(
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
                                    this.changeMode('read');
                                }}
                        >
                        취소</button>
                    </div>
                </form>
            </div>
        );
    }

}
//store 안의 state값을 props로 받음
const mapStateToProps = ({crud}) => ({
    contents: crud.contents,
    selectId: crud.selectId,
    mode: crud.mode,
});

const mapDispatchToProps = dispatch => ({
    CrudActions: bindActionCreators(crudActions, dispatch) // 액션들을 한줄로 표시
});

// const mapDispatchToProps = { changeMode };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"; 
import * as crudActions from "../store/modules/crud";
import Form from '../components/Form';


class FormContainer extends Component {
    constructor(props){
        super(props);
        const { contents, selectId } = this.props;
        const content = contents.filter(content => content.id === selectId); // selectId와 id가 같은 contents만 남긴다.

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
                        ? this.props.onCreate(this.state) // create 일 때
                        : this.props.onUpdate(this.state) // update 일 때
                    )
                )
            }
    };

    changeMode = (mode) => {
        this.props.onChangeMode(mode);
    };

    render(){
        const { subject } = this.props;
        return(
            <>
                <Form
                    mode = {mode}
                    onChangeMode = {this.changeMode}
                />
            </>
        );
    }

}
//store 안의 state값을 props로 받음
const mapStateToProps = ({crud}) => ({
    contents: crud.contents,
    selectId: crud.selectId,
    mode: crud.mode,
});
const mapDispatchToProps = { changeMode };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);
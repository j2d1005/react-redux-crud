import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"; 
import * as crudActions from "../store/modules/crud";
import TocInfoList from '../components/TocInfoList';

class TocinfoContainer extends Component {
    shouldComponentUpdate(newProps, newState){  // info 중에 수정하거나 추가된 요소만 render
        if(this.props.contents === newProps.contents){
            return false;
        }
        else{
            return true;
        }

    }
    changeMode = (mode) => {
        const { CrudActions } = this.props;
        CrudActions.onChangeMode(mode);
    }
    select = (idx) => {
        const { CrudActions } = this.props;
        CrudActions.onSelect(idx);
    }

    render(){
        const { contents, selectId, mode } = this.props;
        return(
            <>
                <TocInfoList
                    contents={contents} // contents라는 이름으로 contents 배열을 TocInfo에 전달
                    selectId={selectId}
                    mode={mode}
                    onSelect = {this.select}
                    onChangeMode={this.changeMode}
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
const mapDispatchToProps = dispatch => ({
    CrudActions: bindActionCreators(crudActions, dispatch) // 액션들을 한줄로 표시
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TocinfoContainer);
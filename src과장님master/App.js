import React, {Component} from 'react';
import styled from "styled-components";
import AppsContainer from "./containers/AppsContainer";
import ControlsContainer from "./containers/ControlsContainer";
import GlobalStyled from "./assets/GlobalStyles";

const AppBox = styled.div`
    width:100%; max-width:600px;padding:20px;margin:0 auto;
    h1{
        font-size:32px;border-bottom:1px solid #000;font-weight:bold;line-height:2em;
    }
`;

class App extends Component {
    render() {
        return (
            <AppBox>
                <h1>React & Redux</h1>
                <AppsContainer />
                <ControlsContainer />
                <GlobalStyled />
            </AppBox>
        );
    }
}

export default App;
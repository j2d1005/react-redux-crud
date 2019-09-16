import React, {Component} from 'react';
import TabContainer from "./containers/TabContainer";
import ControlsContainer from "./containers/ControlsContainer";

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>React & Redux</h1>
                <TabContainer />
                <ControlsContainer />
            </div>
        );
    }
}

export default App;
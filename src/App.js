import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

// components
import SelfAdaptionLayout from './components/self-adaption-layout/self-adaption-layout';
import BoilingVerdict from './components/lifting-state-up/boiling-verdict';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Learning</h1>
                </header>
                <p className="App-intro">
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                </p>
                {/*<SelfAdaptionLayout name='Self Adaption Layout'/>*/}
                <BoilingVerdict />
            </div>
        );
    }
}

export default App;

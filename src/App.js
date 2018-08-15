import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import SelfAdaptionLayout from './components/self-adaption-layout/self-adaption-layout';
import BoilingVerdict from './components/lifting-state-up/boiling-verdict';
import LifeAndState from './components/state-and-lifecycle/state-and-lifecycle';
import ListsAndKeys from './components/lists-and-keys/lists-and-keys';
import Forms from './components/controlled-components/forms';
import Reservation from './components/controlled-components/reservation';
import UncontrolledComponents from './components/uncontrolled-components/uncontrolled-components';
import NoneRouter from './react-router/none-router';
import ReactRouter from './react-router/react-router';
import History from './components/history-api/history';

import pathToRegExp from 'path-to-regexp';

const PageRouterTest = ({ match }) => (
    <div>
        <h2>Page Router Test</h2>
        <ul>
            <li>
                <Link to={`${match.url}/branch1`}>
                    branch1
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/branch2`}>
                    branch2
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/branch3`}>
                    branch3
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:branchId`} component={Branch} />
        <Route exact path={match.url} render={(props) => (
            <div>
                {console.log('props: ', props)}
                <h3>Default Information</h3>
            </div>
        )}/>
    </div>
);

const Branch = ({ match }) => {
    console.log('branch: ', match);
    return (
        <div>
            <h3>{match.params.branchId}</h3>
        </div>
    )
};

class App extends Component {
    render() {
        const re = pathToRegExp('/page/:branchId');
        console.log(`re: ${re}`, re.exec('/page/branch1'));
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">React Learning</h1>
                    </header>
                    <p className="App-intro">
                        {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                    </p>
                    <ul>
                        <li><Link to="/">Self Adaption Layout</Link></li>
                        <li><Link to="/Life">Life And State</Link></li>
                        <li><Link to="/Boiling">Boiling Verdict</Link></li>
                        <li><Link to="/Page">Page Router Test</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={SelfAdaptionLayout} />
                    <Route path="/Life" component={LifeAndState} />
                    <Route path="/Boiling" component={BoilingVerdict} />
                    <Route path="/Page" component={PageRouterTest} />
                </div>
            </Router>
        );
    }
}

export default App;

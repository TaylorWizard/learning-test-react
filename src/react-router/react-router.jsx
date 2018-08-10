import React from 'react';
import {Router, Route, Link } from 'react-router-dom';

// components
import SelfAdaptionLayout from '../components/self-adaption-layout/self-adaption-layout'
import BoilingVerdict from '../components/lifting-state-up/boiling-verdict';
import ListsAndKeys from '../components/lists-and-keys/lists-and-keys';

class ReactRouter extends React.Component {
    constructor(props) {
        super(props);
    }

     render() {
        return (
            <Router history>
                <div>
                    <h1>React Router</h1>
                    <ul>
                        <li><Link to="/"/>keys</li>
                        <li><Link to="/temperature">temperature</Link></li>
                        <li><Link to="/layout">layout</Link></li>
                    </ul>
                    <hr/>

                    <Route exact path="/" component={ListsAndKeys} />
                    <Route path="temperature" component={BoilingVerdict} />
                    <Route path="layout" component={SelfAdaptionLayout} />
                </div>
            </Router>
        )
     }
}

export default ReactRouter;

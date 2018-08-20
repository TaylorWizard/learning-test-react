import React from 'react';

import {Router, Route, Link, BrowserRouter} from 'react-router-dom';

import SelfAdaptionLayout from '../components/self-adaption-layout/self-adaption-layout'
import BoilingVerdict from '../components/lifting-state-up/boiling-verdict';
import ListsAndKeys from '../components/lists-and-keys/lists-and-keys';

class ReactRouter extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

     render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>React Router</h1>
                    <ul>
                        <li><Link to="/"/>keys</li>
                        <li><Link to="/temperature">temperature</Link></li>
                        <li><Link to="/layout">layout</Link></li>
                    </ul>
                    <hr/>

                    <Route exact path="/" component={ListsAndKeys} />
                    <Route path="/temperature" component={BoilingVerdict} />
                    <Route path="/layout" component={SelfAdaptionLayout} />
                </div>
            </BrowserRouter>
        )
     }
    componentDidMount() {}

    componentDidUpdate() {}
}

export default ReactRouter;

import React from 'react';

import SelfApdationLayout from '../components/self-adaption-layout/self-adaption-layout'
import BoilingVerdict from '../components/lifting-state-up/boiling-verdict';
import ListsAndkeys from '../components/lists-and-keys/lists-and-keys';

class NoneRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        }
    }

    componentWillMount() {}

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    componentWillUnmount() {}

    componentWillReceiveProps() {}

    render() {
        let Child;
        switch (this.state.route) {
            case '/layout': Child = SelfApdationLayout; break;
            case '/temperature': Child = BoilingVerdict; break;
            default: Child = ListsAndkeys;
        }
        return (
            <div>
                <h1>none router</h1>
                <ul>
                    <li><a href="#/layout">layout</a></li>
                    <li><a href="#/temperature">temperature</a></li>
                </ul>
                <Child />
            </div>
        )
    }
}

export default NoneRouter;

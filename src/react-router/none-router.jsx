import React from 'react';
import Adaption from '../components/self-adaption-layout/self-adaption-layout';
import ListsAndKeys from '../components/lists-and-keys/lists-and-keys';
import UncontrolledComponents from '../components/uncontrolled-components/uncontrolled-components'

class NoneRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1)
        }
    }

    componentWillMount() {
        window.addEventListener('hashchange', (e) => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    render() {
        let Child;

        switch(this.state.route) {
            case '/adaption': Child = Adaption; break;
            case '/Lists': Child = ListsAndKeys; break;
            default: Child = UncontrolledComponents;
        }

        return (
            <div>
                <h4>None React Router</h4>
                <a href="#/adaption">adaption</a>
                <br/>
                <a href="#/Lists">lists</a>
                <Child />
            </div>
        )
    }
}

export default NoneRouter;
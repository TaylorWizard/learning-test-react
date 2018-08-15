import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    replaceState() {
        window.history.replaceState(null, null, 'hello');
    }

    pushState() {
        window.history.pushState(null, null, 'hello-push-state');
    }

    pushHandler() {
        this.pushState();
    }

    replaceHandler() {
        this.replaceState();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.props.children && this.props.children}
                <div>
                    <button onClick={this.replaceHandler.bind(this)}>replace state</button>
                    <button onClick={this.pushHandler.bind(this)}>push state</button>
                </div>
            </div>
        )
    }
}

export default History;
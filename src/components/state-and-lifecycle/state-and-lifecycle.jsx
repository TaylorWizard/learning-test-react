import React, {Component} from 'react';

class StateAndLifeStyle extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick(e) {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <h1>State And Lifecycle</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default StateAndLifeStyle;
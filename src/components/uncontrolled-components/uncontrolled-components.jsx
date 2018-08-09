import React from 'react';

class UncontrolledComponents extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    componentWillMount() {}

    componentDidMount() {}


    handleSubmit(event) {
        console.log(this.input);
        console.log(`A name was submitted: ${this.input.current.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.input}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default UncontrolledComponents;

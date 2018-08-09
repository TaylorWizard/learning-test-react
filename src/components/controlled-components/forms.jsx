import React, {Component} from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selectedValue: 'coconut'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.value}`);
        event.preventDefault();
    }

    handleSelectChange(event) {
        this.setState({
            selectedValue: event.target.value
        });
        alert(`Your favorite flavor is: ${this.state.selectedValue}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" onChange={this.handleChange}/>
                </label>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.selectedValue} onChange={this.handleSelectChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default Forms;

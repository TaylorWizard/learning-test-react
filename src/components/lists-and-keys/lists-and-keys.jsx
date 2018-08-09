import React, {Component} from 'react';

function ListItem(props) {
    return <li style={{"listStyleType": "none"}}>{props.value}</li>
}

class ListsAndKeys extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const array = [1,2,3,4,5];
        return (
            <div>
                <ul>
                    {(() => array.map((number) =>
                        <ListItem key={number.toString()}
                                  value={number}
                        />
                    ))()}
                </ul>
            </div>
        )
    }
}

export default ListsAndKeys;

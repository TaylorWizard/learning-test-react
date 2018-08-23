import React from 'react';

import { connect } from 'react-redux';

class TreeNode extends React.Component{
    constructor() {
        super();
        this.descendents = [];
    }

    addDescendent(node) {

    }

    render() {
        return (
            <div>
                <h1>Tree Node</h1>
            </div>
        )
    }
}

export default connect()(TreeNode);

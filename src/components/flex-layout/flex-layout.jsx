import React, {Component} from 'react';

class FlexLayout extends Component{
    render() {
        return (
            <div className="flex-layout">
                <div className="item member-1">1</div>
                <div className="item member-2">2</div>
                <div className="item member-3">3</div>
                <div className="item member-4">4</div>
                <div className="item member-5">5</div>
            </div>
        )
    }
}

export default FlexLayout;
import React from 'react';
import { connect } from 'react-redux';

class Tpl extends React.Component {
    render() {
        return(
            <div className={this.props.class}>
                <div className="box">
                    {this.props.isShowBase && (() => (
                        <div className="base"></div>
                    ))()}
                    <div className="child">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Tpl);
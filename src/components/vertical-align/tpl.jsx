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
                    {!this.props.isHideChild && (() => (
                        <div className="child">
                            {this.props.children}
                        </div>
                    ))()}
                    {this.props.img && (() => (
                        <img alt="kitten" src={this.props.source} />
                    ))()}
                </div>
            </div>
        )
    }
}

export default connect()(Tpl);
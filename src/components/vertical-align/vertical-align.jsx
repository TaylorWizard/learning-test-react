import React from 'react';

import { connect } from 'react-redux';
import './scss/index.scss';

class VerticalAlign extends React.Component {
    constructor() {
        super();
    }

    absoluteNegativeMargin() {
        return (
            <div className="box">
                <div className="child">
                    <p>Absolute</p>
                    <p>Negative Margin</p>
                </div>
            </div>
        )
    }

    absoluteTransform() {
        return (
            <div className="box">
                <div className="child">
                    <p>Absolute</p>
                    <p>Transform</p>
                </div>
            </div>
        )
    }

    percentageAbsoluteNegativeMargin() {
        return (
            <div className="box">
                <div className="child">
                    <p>Percentage</p>
                    <p>Absolute</p>
                    <p>Negative Margin</p>
                </div>
            </div>
        )
    }

    absoluteMarginAuto() {
        return (
            <div className="box">
                <div className="child">
                    <p>Absolute</p>
                    <p>Margin Auto</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="vertical-align">
                <div className="absolute-negative-margin">
                    {this.absoluteNegativeMargin()}
                </div>
                <div className="absolute-transform">
                    {this.absoluteTransform()}
                </div>
                <div className="percentage-absolute-negative-margin">
                    {this.percentageAbsoluteNegativeMargin()}
                </div>
                <div className="margin-auto">
                    {this.absoluteMarginAuto()}
                </div>
                <div className="display-vertical-align">
                </div>
                <div className="flex"></div>
                <div className="flex-column-main-axis"></div>
                <div className="line-height"></div>
                <div className="line-height-vertical-align"></div>
                <div className="padding">

                </div>
                <div className="refer-to-another-ele"></div>
            </div>
        )
    }
}

export default connect()(VerticalAlign);
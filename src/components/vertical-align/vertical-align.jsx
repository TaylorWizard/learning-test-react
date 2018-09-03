import React from 'react';

import Tpl from './tpl';

import { connect } from 'react-redux';
import './scss/index.scss';

class VerticalAlign extends React.Component {
    constructor() {
        super();
    }

    padding() {
        return (
            <div className="box">
                <div className="child">
                    <div>padding</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="vertical-align">
                <Tpl class="absolute-negative-margin">
                    <p>Absolute</p>
                    <p>Negative Margin</p>
                </Tpl>
                <Tpl class="absolute-transform">
                    <p>Absolute</p>
                    <p>Transform</p>
                </Tpl>
                <Tpl class="percentage-absolute-negative-margin">
                    <p>Percentage</p>
                    <p>Absolute</p>
                    <p>Negative Margin</p>
                </Tpl>
                <Tpl class="margin-auto">
                    <p>Absolute</p>
                    <p>Margin Auto</p>
                </Tpl>
                <div className="display-vertical-align">

                </div>
                <Tpl class="flex">
                    <div>flex</div>
                </Tpl>
                <div className="flex-column-main-axis"></div>
                <div className="line-height"></div>
                <div className="line-height-vertical-align"></div>
                <Tpl class="padding">
                    <div>padding</div>
                </Tpl>
                <Tpl class="reference" isShowBase={true}>
                    <div>reference</div>
                </Tpl>
            </div>
        )
    }
}

export default connect()(VerticalAlign);
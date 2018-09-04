import React from 'react';

import Tpl from './tpl';

import { connect } from 'react-redux';
import kitten from './banana-cat.jpg';
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
                <Tpl class="absolute-transform">
                    <p>Absolute</p>
                    <p>Transform</p>
                </Tpl>
                <Tpl class="absolute-negative-margin">
                    <p>Absolute</p>
                    <p>Negative Margin</p>
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
                <Tpl img={true} source={kitten} isHideChild={true} class="display-vertical-align">
                    <div>display vertical align</div>
                </Tpl>
                <Tpl class="flex">
                    <div>flex</div>
                </Tpl>
                <Tpl class="flex-column-main-axis">
                    <div>flex column</div>
                    <div>main axis</div>
                </Tpl>
                {/*<div className="line-height-vertical-align"></div>*/}
                <Tpl class="line-height-vertical-align">
                    {/*<div>line height</div>*/}
                    {/*<div>vertical align</div>*/}
                    <div>line height vertical align</div>
                </Tpl>
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
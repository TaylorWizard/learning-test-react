import React, {Component} from "react";
import "./self-adaption-layout.scss";
import FlexLayout from '../flex-layout/flex-layout';

class SelfAdaptionLayout extends Component {
    TemplateTwoCol() {
        return (
            <div>
                <h4>Left fixed, right self-adaption</h4>
                <div className="box right-adaption">
                    <div className="left">left side</div>
                    <div className="right">right side</div>
                </div>
                <h4>Left self-adaption, right fixed</h4>
                <div className="box left-adaption">
                    <div className="left">left side</div>
                    <div className="right">right side</div>
                </div>
            </div>
        )
    }

    templateThreeCol() {
        return (
            <div>
                <div className="box">
                    <div className="left">left side</div>
                    <div className="main">main</div>
                    <div className="right">right side</div>
                </div>
            </div>
        )
    }

    twoColCalcLayout() {
        return (
            <div className="two-col-calc-layout">
                {(() => this.TemplateTwoCol())()}
            </div>
        )
    }

    twoColFloatLayoutWithMargin() {
        return (
            <div className="two-col-float-layout-with-margin">
                <div>
                    <h4>Left fixed, right self-adaption</h4>
                    <div className="box right-adaption">
                        <div className="left">left side</div>
                        <div className="right">right side</div>
                    </div>
                    <h4>Left self-adaption, right fixed</h4>
                    <div className="box left-adaption">
                        <div className="right">right side</div>
                        <div className="left">left side</div>
                    </div>
                </div>
            </div>
        )
    }

    twoColFloatLayoutWithBFC() {
        return (
            <div className="two-col-float-layout-with-bfc">
                <div>
                    <h4>Left fixed, right self-adaption</h4>
                    <div className="box right-adaption">
                        <div className="left">left side</div>
                        <div className="right">right side</div>
                    </div>
                    <h4>Left self-adaption, right fixed</h4>
                    <div className="box left-adaption">
                        <div className="right">right side</div>
                        <div className="left">left side</div>
                    </div>
                </div>
            </div>
        )
    }

    twoColAbsoluteLayoutWithMargin() {
        return (
            <div className="two-col-absolute-layout-with-margin">
                {(() => this.TemplateTwoCol())()}
            </div>
        )
    }

    twoColAbsoluteLayout() {
        return (
            <div className="two-col-absolute-layout">
                {(() => this.TemplateTwoCol())()}
            </div>
        )
    }

    twoColFlexLayout() {
        return (
            <div className="two-col-flex-layout">
                {(() => this.TemplateTwoCol())()}
            </div>
        )
    }

    threeColAbsoluteLayout() {
        return (
            <div className="three-col-absolute-layout">
                {(() => this.templateThreeCol())()}
            </div>
        )
    }

    threeColFloatLayout() {
        return (
            <div className="three-col-float-layout">
                <div className="box">
                    <div className="left">left side</div>
                    <div className="right">right side</div>
                    <div className="main">main</div>
                </div>
            </div>
        )
    }

    threeColFlexLayout() {
        return (
            <div className="three-col-flex-layout">
                {(() => this.templateThreeCol())()}
            </div>
        )
    }

    threeColGrailLayout() {
        return (
            <div className="three-col-grail-layout">
                <div className="box">
                    <div className="main">main</div>
                    <div className="left">left</div>
                    <div className="right">right</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="self-adaption-layout">
                <div className="title">
                    <h1>{this.props.name}</h1>
                </div>
                <div className="split"><i>split</i></div>
                <div className="two-col-layout">
                    <div className="wrap-split">
                        <h2>1.Two Col Calc Layout</h2>
                        <div className="split inline"><i>split</i></div>
                    </div>
                    {(() => this.twoColCalcLayout())()}
                    <div className="wrap-split">
                        <h2>2.Two Col Float Layout With Margin</h2>
                        <div className="split inline"><i>split</i></div>
                    </div>
                    {(() => this.twoColFloatLayoutWithMargin())()}
                    <div className="wrap-split">
                        <h2>3.Two Col Float Layout With BFC</h2>
                        <div className="split inline"><i>split</i></div>
                    </div>
                    {(() => this.twoColFloatLayoutWithBFC())()}
                    <div className="wrap-split">
                        <h2>4.Two Col Absolute Layout With Margin</h2>
                        <div className="split inline"><i>split</i></div>
                    </div>
                    {(() => this.twoColAbsoluteLayoutWithMargin())()}
                    <div className="wrap-split">
                        <h2>5.Two Col Absolute Layout</h2>
                        <div className="split inline"><i>split</i></div>
                    </div>
                    {(() => this.twoColAbsoluteLayout())()}
                    <div className="wrap-split">
                        <h2>6.Two Col Flex Layout</h2>
                        <div className="split inline"><i>split</i></div>
                    </div>
                    {(() => this.twoColFlexLayout())()}
                    <div className="wrap-split">
                        <h2>---Flex Layout---</h2>
                        <div className="split inline"><i>split</i></div>
                    </div>
                    <FlexLayout />
                </div>
                <div className="split"><i>split</i></div>
                <div className="three-col-layout">
                    <div className="wrap-split">
                        <h2>7.Three Col Absolute Layout</h2>
                    </div>
                    {(() => this.threeColAbsoluteLayout())()}
                    <div className="wrap-split">
                        <h2>8.Three Col Flex Layout</h2>
                    </div>
                    {(() => this.threeColFlexLayout())()}
                    <div className="wrap-split">
                        <h2>9.Three Col Float Layout</h2>
                    </div>
                    {(() => this.threeColFloatLayout())()}
                    <div className="wrap-split">
                        <h2>10.Three Col Grail Layout</h2>
                    </div>
                    {(() => this.threeColGrailLayout())()}
                </div>
            </div>
        )
    }
}

export default SelfAdaptionLayout;
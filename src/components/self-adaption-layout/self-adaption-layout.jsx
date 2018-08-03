import React, {Component} from "react";
import "./self-adaption-layout.scss";

class SelfAdaptionLayout extends Component {
    twoColCalcLayout() {
        return (
            <div className="two-col-calc-layout">
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

    twoColFloatLayoutWithMargin() {
        return (
            <div className="two-col-float-layout-with-margin">
                <h4>Left fixed, right self-adaption</h4>
                <div className="box right-adaption">
                    <div className="left">left side</div>
                    <div className="right">right size</div>
                </div>
                <h4>Left self-adaption, right fixed</h4>
                <div className="box left-adaption">
                    {/*注意顺序*/}
                    <div className="right">right size</div>
                    <div className="left">left side</div>
                </div>
            </div>
        )
    }

    twoColFloatLayoutWithBFC() {
        return (
            <div className="two-col-float-layout-with-bfc">

            </div>
        )
    }

    twoColAbsoluteLayoutWithMargin() {
        return (
            <div className="two-col-absolute-layout-with-margin">

            </div>
        )
    }

    twoColAbsoluteLayout() {
        return (
            <div className="two-col-absolute-layout">

            </div>
        )
    }

    twoColFlexLayout() {
        return (
            <div className="two-col-flex-layout">
                
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
                    <div style={{"width": "auto", "display": "inline-block"}}>
                        <h2>1.Two Col Calc Layout</h2>
                        <div className="split inline"><i>split</i></div>
                    </div>
                    {(() => this.twoColCalcLayout())()}
                    <div style={{"width": "auto", "display": "inline-block"}}>
                        <h2>2.Two Col Float Layout With Margin</h2>
                        <div className="split inline"><i>split</i></div>
                    </div>
                    {(() => this.twoColFloatLayoutWithMargin())()}
                </div>
                <div className="split"><i>split</i></div>
                <div className="three-col-layout"></div>
            </div>
        )
    }
}

export default SelfAdaptionLayout;
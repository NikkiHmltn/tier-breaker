import React, { Component } from 'react';
import './css/Step2.css';

export default class Step2 extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            // Prop: The current step
            return null;
        }
        let optionNum = parseInt(this.props.options);

        function makeInput(optionNumber, props) {
            return (
                <input
                    type="text"
                    placeholder={'Option ' + optionNumber}
                    name={'option-' + optionNumber}
                    value={props.list}
                    onChange={props.handleChange}
                />
            );
        }
        const matchups = [];

        for (let i = 1; i < optionNum; i += 2) {
            let option1 = makeInput(i, this.props);
            let option2 = makeInput(i + 1, this.props);
            let finalDiv = (
                <div className="bracket-options">
                    {option1}
                    <br></br>
                    VS
                    <br></br>
                    {option2}
                </div>
            );
            matchups.push(finalDiv);
        }

        return (
            <div className="brackets">
                {matchups}
                <a className="waves-effect waves-light btn " onClick={this.props.handleSubmit} href="">
                    Submit
                </a>
            </div>
        );
    }
}

import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css';

export default class EditBracket extends Component {
    constructor() {
        super();
        this.state = {
            key: '',
            private: '',
            time_duration: '',
            title: ''
        };
    }

    componentDidMount() {
        M.AutoInit();
        //get axios the bracket manually
        //get it to display and fill in input values autom
        axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/e71013dc`).then((bracket) => {
            console.log(bracket);
            let startBracket = bracket.data;
            this.setState({
                key: startBracket.key,
                private: startBracket.private,
                time_duration: startBracket.time_duration,
                title: startBracket.title
            });
        });
    }

    //create a function to handle the PUT route and send that package back to the behind

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        if (name === 'private' && value === 'on') {
            console.log('in here');
            this.setState({ private: true });
        } else if (name === 'public' && value === 'on') {
            console.log('in here');
            this.setState({ private: false });
        } else if (name === 'public' && value === 'no') {
            this.setState({ private: true });
        }

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="EditBracket">
                <h2>{this.state.key}</h2>
                {this.state.private === true ? (
                    <div>
                        <h4>Currently: Private</h4>
                        <p>
                            <label htmlFor="public">
                                <input type="checkbox" name="public" onChange={this.handleChange} />
                                <span>Make Public</span>
                            </label>
                        </p>
                    </div>
                ) : (
                    <div>
                        <h4>Currently: Public</h4>
                        <p>
                            <label>
                                <input htmlFor="private" type="checkbox" name="private" onChange={this.handleChange} />
                                <span>Make Private</span>
                            </label>
                        </p>
                    </div>
                )}
                <label htmlFor="title">Title/Question</label>
                <input
                    className="input-field"
                    id="title"
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <h4>Current Time: {this.state.time_duration} day(s)</h4>
                <div className="input-field">
                    <select name="duration" id="duration" onChange={this.handleChange}>
                        <option>Select One</option>
                        <option value="1">1 day</option>
                        <option value="2">2 days</option>
                        <option value="3">3 days</option>
                        <option value="4">4 days</option>
                        <option value="5">5 days</option>
                        <option value="6">6 days</option>
                        <option value="7">7 days</option>
                    </select>
                    <label htmlFor="duration">Voting Duration</label>
                </div>
            </div>
        );
    }
}

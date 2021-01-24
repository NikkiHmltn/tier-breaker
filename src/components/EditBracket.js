import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import M from 'materialize-css';

export default class EditBracket extends Component {
    constructor() {
        super();
        this.state = {
            key: '',
            private: '',
            time_duration: '',
            title: '',
            rounds: ''
        };
    }

    componentDidMount() {
        M.AutoInit();

        this.setState({ loading: true });
        // DONT FORGET TO CHANGE THE BRACKET ID TO WHATEVER RUBEN HAS IT SET TO
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/bracket/d10365ec`)
            //SERIOUSLY DONT FORGET
            .then((bracket) => {
                console.log(bracket);
                let startBracket = bracket.data;
                this.setState({
                    key: startBracket.key,
                    private: startBracket.private,
                    title: startBracket.title,
                    redirect: false,
                    loading: false
                });
            });
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handlePrivate = (event) => {
        const { name, value } = event.target;
        if (name === 'private' && value === 'on') {
            this.setState({ private: true });
        } else if (name === 'public' && value === 'on') {
            this.setState({ private: false });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const newBracket = {
            title: this.state.title,
            private: this.state.private
        };
        axios
            .put(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/edit`, newBracket)
            .then((newBracket) => {
                this.setState({ redirect: true, loading: false });
            });
    };

    handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/delete`).then((res) => {
            if (typeof res.data.msg === 'string' && res.data.msg.includes('deleted')) {
                this.setState({ error: false, loading: false, redirect: true });
            } else {
                this.setState({ loading: false, error: true });
            }
        });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        if (this.state.loading) {
            <div>LOADING....</div>;
        }
        return (
            <div className="EditBracket">
                <h2>{this.state.key}</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.state.private == true ? (
                        <div>
                            <h4>Currently: Private</h4>
                            <p>
                                <label htmlFor="public">
                                    <input type="checkbox" name="public" onChange={this.handlePrivate} />
                                    <span>Make Public</span>
                                </label>
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h4>Currently: Public</h4>
                            <p>
                                <label>
                                    <input
                                        htmlFor="private"
                                        type="checkbox"
                                        name="private"
                                        onChange={this.handlePrivate}
                                    />
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
                    <a class="waves-effect waves-light btn pink" onClick={this.handleSubmit}>
                        Submit
                    </a>
                    <a class="waves-effect waves-light btn pink" onClick={this.handleDelete}>
                        DELETE
                    </a>
                </form>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './css/Step2.css';
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
            rounds: '',
            redirect: false,
            successRedirect: false
        };
    }

    componentDidMount() {
        M.AutoInit();

        this.setState({ loading: true });
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.props.match.params.key}`)
            .then((bracket) => {
                if (bracket.data.msg === 'no bracket found') {
                    this.setState({ error: true, loading: false });
                } else {
                    let startBracket = bracket.data;
                    this.setState({
                        key: startBracket.key,
                        private: startBracket.private,
                        title: startBracket.title,
                        redirect: false,
                        loading: false
                    });
                }
            })
            .catch((err) => {
                this.setState({ redirect: true, loading: false });
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
                console.log(newBracket);
                if (newBracket.status === 200) {
                    this.setState({ successRedirect: true, loading: false });
                } else {
                    this.setState({ loading: false, error: true });
                }
            })
            .catch((err) => {
                this.setState({ error: true });
            });
    };

    handleDelete = (event) => {
        axios
            .delete(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/delete`)
            .then((res) => {
                if (typeof res.data.msg === 'string' && res.data.msg.includes('deleted')) {
                    this.setState({ error: false, loading: false, redirect: true });
                } else {
                    this.setState({ loading: false, error: true });
                }
            })
            .catch((err) => {
                this.setState({ error: true });
            });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/404" />;
        }
        if (this.state.successRedirect) {
            return <Redirect to={{ pathname: '/bracket', state: this.state.key }} />;
        }
        if (this.state.loading) {
            <div>LOADING....</div>;
        }
        if (this.state.error) {
            return <div style={{ color: 'red' }}>AN ERROR HAS OCCURED. PLEASE TRY AGAIN OR CONTACT SUPPORT.</div>;
        }
        return (
            <div className="EditBracket">
                <h2>{this.state.title}</h2>
                <form onSubmit={this.handleSubmit} className="Forms">
                    {this.state.private === true ? (
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
                    <a class="waves-effect waves-light btn pink" style={{ margin: '10px' }} onClick={this.handleSubmit}>
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

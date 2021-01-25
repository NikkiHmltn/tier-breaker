import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import './css/Bracket.css';
import axios from 'axios';
import io from 'socket.io-client';

export default class Bracket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socket: null,
            key: this.props.history.location.state.key || this.props.location.state,
            voting: [{}],
            loading: true,
            title: ''
        };
    }

    componentDidMount() {
        const setCurrentSocket = (s) => {
            this.setState({ socket: s });
        };
        let socket = '';
        if (!this.state.socket) {
            socket = io(process.env.REACT_APP_SERVER_URL);
            setCurrentSocket(socket);
        } else {
            socket = this.state.socket;
        }
        this.setState({ loading: true });
        axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}`).then((res) => {
            console.log(res);
            if (res.data.msg === 'no bracket found') {
                <Redirect to="/entercode" />;
                console.log('nope');
            } else {
                this.setState({
                    key: res.data.key,
                    voting: res.data.voting_options.votes[res.data.voting_options.votes.length - 1],
                    loading: false,
                    title: res.data.title
                });
            }
        });
        socket.on('vote_cast', (data) => {
            if (data.key === this.state.key) {
                axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}`).then((res) => {
                    console.log(res);
                    this.setState({ voting: res.data.voting_options.votes[res.data.voting_options.votes.length - 1] });
                });
            }
        });
    }

    handleSubmit = (e, k) => {
        e.preventDefault();
        let votingCount = {
            option: k
        };
        this.setState({ loading: true });
        axios.put(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/vote`, votingCount).then((res) => {
            this.setState({ loading: false });
        });
    };

    render() {
        if (this.state.loading) {
            return <p>LOADING...</p>;
        }
        let key = [];
        console.log(this.state.voting);
        for (let k in this.state.voting) {
            console.log(k, this.state.voting[k]);
            key.push(
                <div className="voting" key={k}>
                    <p>
                        {k}: {this.state.voting[k]}
                        <br />
                        <button
                            onClick={(e) => {
                                this.handleSubmit(e, k);
                            }}>
                            Vote
                        </button>
                    </p>
                </div>
            );
        }

        return (
            <div className="Vote">
                <h2>{this.state.title}?</h2>
                <div className="container">{key}</div>
                <hr></hr>
                <Link to="/votesubmitted">
                    <button type="button" onClick={this.handleSubmit} className="waves-effect waves-light btn pink">
                        Submit Vote
                    </button>
                </Link>
            </div>
        );
    }
}

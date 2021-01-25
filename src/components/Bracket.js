import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import VoteSubmitted from './VoteSubmitted';
import './css/Bracket.css';

export default class Bracket extends Component {

     constructor(props) {
        super(props);
        this.state = {
            socket: null,
            key: this.props.history.location.state.key || this.props.location.state,
            voting: [{}],
            loading: true,
            title: '',
            error: false,
            redirect: false,
            voted: ''
        };
    }

    componentDidMount() {
        const setCurrentSocket = (s) => {
            this.setState({ socket: s });
        };
        let socket = '';
        if (!this.state.socket) {
            socket = io(process.env.REACT_APP_SERVER_URL);
            this.setState({ socket });
        } else {
            socket = this.state.socket;
        }

        this.setState({ loading: true });
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}`)
            .then((res) => {
                if (res.data.msg === 'no bracket found') {
                    this.setState({ redirect: true, loading: false });
                } else {
                    //check if you need to tally the bracket:
                    const timeElapsed = res.data.round_duration * res.data.voting_options.votes.length * 86400000;
                    if (Date.now() - res.data.created_at.$date > timeElapsed && !res.data.end_display) {
                        axios
                            .put(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/tally`)
                            .then((response) => {
                                console.log(response);
                                this.setState({
                                    key: response.data.bracket.key,
                                    voting:
                                        response.data.bracket.voting_options.votes[
                                            response.data.bracket.voting_options.votes.length - 1
                                        ],
                                    loading: false,
                                    title: response.data.bracket.title
                                });
                            })
                            .catch((err) => this.setState({ redirect: true, loading: false }));
                    } else {
                        this.setState({
                            key: res.data.key,
                            voting: res.data.voting_options.votes[res.data.voting_options.votes.length - 1],
                            loading: false,
                            title: res.data.title
                        });
                    }
                }
            })
            .catch((err) => {
                this.setState({ redirect: true, loading: false });
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

    componentWillUnmount() {
        console.log('unmount');
        console.log(this.state.socket);
        if (this.state.socket) {
            console.log('disconnect socket');
            this.state.socket.disconnect();
        }
    }

    handleSubmit = (e, k) => {
        e.preventDefault();
        let votingCount = {
            option: k
        };
        axios
            .put(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/vote`, votingCount)
            .then((res) => {
                console.log(res);
                if (res.data.msg.includes('updated')) {
                    this.setState({ voted: 'disabled' });
                } else {
                    this.setState({ error: true });
                }
            })
            .catch((err) => {
                this.setState({ error: true });
            });
    };

    render() {
        if (this.state.loading) {
            return <p>LOADING...</p>;
        }
        let key = [];
        for (let k in this.state.voting) {
            key.push(
                <div className="voting" key={k}>
                    <p>
                        {k}: {this.state.voting[k]}
                        <br />
                        <button
                            className={`waves-effect waves-light btn ${this.state.voted}`}
                            onClick={(e) => {
                                this.handleSubmit(e, k);
                            }}>
                            Vote
                        </button>
                    </p>
                </div>
            );
        }
        if (this.state.redirect) {
            return <Redirect to="/404" />;
        }
        if (this.state.error) {
            return <div style={{ color: 'red' }}>AND ERROR HAS OCCURED. PLEASE TRY AGAIN OR CONTACT SUPPORT.</div>;
        }

        return (
            <div className="Vote">
                <h2>{this.state.title}?</h2>
                <div className="container">{key}</div>
                {this.state.voted ? <VoteSubmitted /> : null}
            </div>
        );
    }
}

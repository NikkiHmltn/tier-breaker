import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import VoteSubmitted from './VoteSubmitted';
import socket from './socket';
import './css/Bracket.css';

export default class Bracket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: null,
            key: this.props.history.location.state.key || this.props.location.state,
            voting: [{}],
            options: [],
            loading: true,
            title: '',
            error: false,
            redirect: false,
            end_display: [],
            voted: ''
        };
    }

    componentDidMount() {
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
                                this.setState({
                                    key: response.data.bracket.key,
                                    voting: response.data.bracket.voting_options.votes,
                                    options: response.data.bracket.voting_options.round_options,
                                    loading: false,
                                    title: response.data.bracket.title
                                });
                                if (response.data.bracket.end_display)
                                    this.setState({
                                        end_display:
                                            response.data.bracket.end_display.winner ||
                                            response.data.bracket.end_display.full_bracket ||
                                            response.data.bracket.end_display.top_three
                                    });
                            })
                            .catch((err) => {
                                console.log(err);
                                this.setState({ redirect: true, loading: false });
                            });
                    } else {
                        console.log(res.data);
                        this.setState({
                            key: res.data.key,
                            voting: res.data.voting_options.votes,
                            options: res.data.voting_options.round_options,
                            loading: false,
                            title: res.data.title
                        });
                        if (res.data.end_display)
                            for (let k in res.data.end_display) {
                                if (res.data.end_display[k].length > 0) {
                                    this.setState({ end_display: res.data.end_display[k] });
                                }
                            }
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                this.setState({ redirect: true, loading: false });
            });

        socket.on('vote_cast', (data) => {
            if (data.key === this.state.key) {
                axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}`).then((res) => {
                    this.setState({ voting: res.data.voting_options.votes });
                });
            }
        });
        this.setState({ socket });
    }

    handleSubmit = (e, k) => {
        e.preventDefault();
        let votingCount = {
            option: k
        };
        axios
            .put(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/vote`, votingCount)
            .then((res) => {
                if (res.data.msg.includes('updated')) {
                    this.setState({ voted: 'disabled' });
                } else {
                    this.setState({ error: true });
                }
                this.state.socket.emit('vote', this.state.key);
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
        if (this.state.end_display.length === 0) {
            for (let i = 0; i < this.state.voting.length; i++) {
                let level = [];
                if (i === this.state.voting.length - 1) {
                    for (let k of this.state.options) {
                        level.push(
                            <div className="voting" key={k}>
                                <p>
                                    {k}: {this.state.voting[i][k]}
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
                } else {
                    for (let k in this.state.voting[i]) {
                        level.push(
                            <div className="voting" key={k}>
                                <p>
                                    {k}: {this.state.voting[i][k]}
                                </p>
                            </div>
                        );
                    }
                }
                key.unshift(<div className="level">{level}</div>);
                console.log(key);
            }
        }

        const results = this.state.end_display.map((result, i) => {
            return (
                <li key={i}>
                    {Object.keys(result)[0]} <span>{result[Object.keys(result)[0]]}</span>
                </li>
            );
        });

        const tagLines = ['And the winners are... ', 'You have spoken!', 'This just in: ', 'Tournament Results'];
        const ind = Math.floor(Math.random() * tagLines.length);

        const endDisp = (
            <div className="end-display">
                <p>{tagLines[ind]}</p>
                <ol>{results}</ol>
            </div>
        );

        if (this.state.redirect) {
            return <Redirect to="/404" />;
        }
        if (this.state.error) {
            return <div style={{ color: 'red' }}>AND ERROR HAS OCCURED. PLEASE TRY AGAIN OR CONTACT SUPPORT.</div>;
        }

        return (
            <div className="Vote">
                <h2>{this.state.title}?</h2>
                <div className="container">{this.state.end_display.length > 0 ? endDisp : key}</div>
                {this.state.voted ? <VoteSubmitted /> : null}
            </div>
        );
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Filter from './Filter';
import './css/Public.css';

class Public extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicBrackets: [],
            month: '',
            error: false,
            loading: false,
            redirect: false
        };
    }

    componentDidMount() {
        this.setState({loading: true})
        axios.get(`${process.env.REACT_APP_SERVER_URL}/brackets`).then((response) => {
            if (response.data.public_brackets) {
                this.setState({ publicBrackets: response.data.public_brackets, loading: false });
            } else {
                this.setState({loading: false, error: true})
            }
        })
        .catch((err) => {
            this.setState({redirect: true})
        })
    }

    filter = (month) => {
        if (month === 'Show All') {
            this.setState({ month: '' });
        } else {
            this.setState({ month: month });
        }
    };

    render() {
        let monthBrackets = this.state.publicBrackets;
        if (this.state.month) {
            monthBrackets = monthBrackets.filter((bracket) => {
                let month = new Date(bracket.created_at.$date).toString().split(' ')[1];
                return month === this.state.month.slice(0, 3);
            });
        }

        const brackets = monthBrackets.map((bracket) => {
            return (
                <Link key={bracket.key} className="bracket-card" to={{ pathname: '/bracket', state: bracket.key }}>
                    <p className="date">
                        {new Date(bracket.created_at.$date).toString().split(' ').slice(1, 4).join(' ')}
                    </p>
                    <h3>{bracket.title}</h3>
                    {bracket.end_display ? (
                        <p className="vote-view">View Results!</p>
                    ) : (
                        <p className="vote-view">Vote!</p>
                    )}
                </Link>
            );
        });
        if (this.state.error) {
            return <div style={{ color: 'red' }}>AND ERROR HAS OCCURED. PLEASE TRY AGAIN OR CONTACT SUPPORT.</div>;
        }
        if (this.state.loading) {
            return <div>LOADING....</div>;
        }
        if (this.state.redirect) {
            <Redirect to="/404" />
        }
        return (
            <>
                <h1>Public Tournaments</h1>
                <div className="public-brackets">
                    {brackets.length > 0 ? brackets.reverse() : `No Tournaments from ${this.state.month} `}
                </div>
                <Filter onClick={this.filter} />
            </>
        );
    }
}

export default Public;

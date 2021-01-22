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
            month: ''
        };
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/brackets`).then((response) => {
            this.setState({ publicBrackets: response.data.public_brackets });
        });
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
                return month.slice(0, 3) === this.state.month;
            });
        }

        const brackets = monthBrackets.map((bracket) => {
            return (
                <Link key={bracket.key} className="bracket-card" to={`/bracket/${bracket.key}`}>
                    <p>{new Date(bracket.created_at.$date).toString().split(' ').slice(1, 4).join(' ')}</p>
                    <h3>{bracket.title}</h3>
                    {bracket.end_display ? (
                        <Link to={`/bracket/${bracket.key}`}>View Results!</Link>
                    ) : (
                        <Link to={`/bracket/${bracket.key}`}>Vote!</Link>
                    )}
                </Link>
            );
        });

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

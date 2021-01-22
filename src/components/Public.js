import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/Public.css';

class Public extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicBrackets: []
        };
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/brackets`).then((response) => {
            this.setState({ publicBrackets: response.data.public_brackets });
        });
    }

    render() {
        const brackets = this.state.publicBrackets.map((bracket) => {
            return (
                <Link key={bracket.key} className="bracket-card" to={`/bracket/${bracket.key}`}>
                    <p>{new Date(bracket.created_at.$date).toString().split(' ').slice(1, 4).join(' ')}</p>
                    <h3>{bracket.title}</h3>
                    <Link to={`/bracket/${bracket.key}`}>Vote!</Link>
                </Link>
            );
        });

        return (
            <>
                <h1>Public Tournaments</h1>
                <div className="public-brackets">{brackets}</div>
            </>
        );
    }
}

export default Public;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
                <div>
                    <h3>{bracket.title}</h3>
                    <Link to={`/bracket/${bracket.key}`}>Vote!</Link>
                </div>
            );
        });

        return <div>{brackets}</div>;
    }
}

export default Public;

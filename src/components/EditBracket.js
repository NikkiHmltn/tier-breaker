import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import M from "materialize-css"

export default class EditBracket extends Component {
  constructor() {
    super();
    this.state = {
      key: "",
      private: "",
      time_duration: "", 
      title: "",
      rounds: ''
    }

  componentDidMount() {
    M.AutoInit(); 
   
    this.setState({loading: true})
    // DONT FORGET TO CHANGE THE BRACKET ID TO WHATEVER RUBEN HAS IT SET TO 
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/d10365ec`)
    //SERIOUSLY DONT FORGET 
    .then((bracket) => {
      console.log(bracket)
      let startBracket = bracket.data
      this.setState({
        key: startBracket.key, 
        private: startBracket.private,
        title: startBracket.title,
        redirect: false, 
        loading: false
      })
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })   
  }

  handlePrivate = (event) => {
    const {name, value} = event.target
    if (name === 'private' && value === "on") {
      this.setState({private: true})
    } else if (name=== 'public' && value === 'on'){
      this.setState({private: false})
    } 
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({loading: true})
      const newBracket = {
        title: this.state.title,
        private: this.state.private,
      }
      axios.put(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/edit`, newBracket)
      .then((newBracket) => {
        this.setState({redirect: true, loading: false})
      })
  }

  handleDelete = (event) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/delete`)
    .then((res)=> {
      if (typeof res.data.msg === 'string' && res.data.msg.includes('deleted')) {
        this.setState({ error: false, loading: false, redirect: true});
      } else {
        this.setState({ loading: false, error: true });
      }
    })
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    if (this.state.loading) {
      <div>
        LOADING....
      </div>
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
        ):
          <div>
          <h4>Currently: Public</h4>
          <p>
          <label>
            <input htmlFor="private" type="checkbox" name="private" onChange={this.handlePrivate} />
            <span>Make Private</span>
          </label>
        </p>
        </div>
        }
        <label htmlFor="title">Title/Question</label>
          <input
            className="input-field"
            id="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange} 
          />
          <a class="waves-effect waves-light btn pink" onClick={this.handleSubmit}>Submit</a>
          <a class="waves-effect waves-light btn pink" onClick={this.handleDelete}>DELETE</a>
        </form>
        


         
      </div>
    );
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

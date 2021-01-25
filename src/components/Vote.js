import { Link } from "react-router-dom";
import React, {Component} from 'react'
import axios from 'axios'
import io from 'socket.io-client'

export default class Vote extends Component {
  constructor(){
    super()
    this.state = {
      socket: null,
      key: '',
      voting: [{}],
      loading: true, 
      error: false
    }
  }

  

  componentDidMount() {
    console.log('in mount')

    const setCurrentSocket = (s) => {
      this.setState({socket: s})
    }
    let socket = ""
    if (!this.state.socket) {
      socket = io(process.env.REACT_APP_SERVER_URL)
      setCurrentSocket(socket)
    } else {
      socket = this.state.socket
    }

    this.setState({loading: true})
    //CHANGE THE KEY TO WHATEVER RUBEN HAS IT SET TO WHEN YOU GET IT
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/7b831d86`)
    //DONT FORGET
    .then((res) => {
      console.log(res)
      
      this.setState({key: res.data.key, voting: res.data.voting_options.votes[res.data.voting_options.votes.length - 1], loading: false})
    })
    socket.on('vote_cast', (data) => {
      console.log(data)
      if (data.key === this.state.key) {
        
        axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/7b831d86`)
        //DONT FORGET
        .then((res) => {
          console.log(res)
          this.setState({voting: res.data.voting_options.votes[res.data.voting_options.votes.length - 1]})
        })
      }
      console.log('hello from socket')
    })
  }

    
handleSubmit = (e, k) => {
  e.preventDefault()
    let votingCount = {
      option: k
    }
    this.setState({loading: true})
    axios.put(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}/vote`, votingCount)
    .then((res) => {
      this.setState({loading: false})
    })
    
  }


  render() {
    if (this.state.loading) {
      return <p>LOADING...</p>
    }
    let key = []
    console.log(this.state.voting)
    for (let k in this.state.voting) {
      console.log(k, this.state.voting[k])
      key.push(<p>{k}: {this.state.voting[k]}<button onClick={(e) => {this.handleSubmit(e, k)}}>Vote</button></p>)
    }

    return (
      <div className="Vote">
        <h2>
          {this.state.key}
        </h2>
        {key}
       
        
        <Link to="/votesubmitted">
          <a onClick={this.handleSubmit} className="waves-effect waves-light btn pink">Submit Vote</a>
        </Link>
      </div>
    );
  }
  }
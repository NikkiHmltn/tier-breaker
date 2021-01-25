import { Link, Redirect} from "react-router-dom";
import React, {Component} from 'react'
import './css/Bracket.css';
import axios from 'axios'
import io from 'socket.io-client'


export default class Bracket extends Component {
  constructor(props){
    super(props)

    this.state = {
      socket: null,
      key: this.props.history.location.state.key,
      voting: [{}],
      loading: true,
      title: '',
      error: false,
      redirect: false
    }
  }
  

  componentDidMount() {
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
    axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}`)
    .then((res) => {
      if (res.data.msg === "no bracket found"){
        this.setState({redirect: true})
      } else {
        this.setState({key: res.data.key, voting: res.data.voting_options.votes[res.data.voting_options.votes.length - 1], loading: false, title:res.data.title})
      }
      })
      .catch((err) => {
        this.setState({redirect: true})
      })
      socket.on('vote_cast', (data) => {
        if (data.key === this.state.key) {
          
          axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/${this.state.key}`)
          .then((res) => {
            this.setState({voting: res.data.voting_options.votes[res.data.voting_options.votes.length - 1]})
          })
        }
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
      if (res.data.msg.includes('updated')) {
        this.setState({loading: false})
      } else {
        this.setState({error: true, loading: false})
      }
      
    }).catch((err) => {this.setState({error: true})})
    
  }


  render() {
    if (this.state.loading) {
      return <p>LOADING...</p>
    }
    let key = []
    for (let k in this.state.voting) {
      key.push(<div className="voting"><p>{k}: {this.state.voting[k]}<br/><button onClick={(e) => {this.handleSubmit(e, k)}}>Vote</button></p></div>)
    }
    if (this.state.redirect) {
      return(
        <Redirect to="/" />
      )
    }
    if (this.state.error) {
      return <div style={{color: "red"}}>AND ERROR HAS OCCURED. PLEASE TRY AGAIN OR CONTACT SUPPORT.</div>
      }
    if (this.state.redirect) {
      <Redirect to="/entercode" />
    }

    return (
      <div className="Vote">
        <h2>{this.state.title}?</h2>
        <div className="container">
        {key}
        </div>
        <hr></hr>
        <Link to="/votesubmitted">
          <a onClick={this.handleSubmit} className="waves-effect waves-light btn pink">Submit Vote</a>
        </Link>
      </div>
    );
  }
  }
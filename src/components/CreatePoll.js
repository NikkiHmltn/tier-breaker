import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import M from 'materialize-css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class CreatePoll extends Component {
    constructor(props) {
        super(props);
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            duration: '',
            options: '',
            title: '',
            display: '',
            private: false,
            list: [],
            redirect: false
        };

      this.handleChange = this.handleChange.bind(this);
      this._next = this._next.bind(this);
      this._prev = this._prev.bind(this);
    }

    componentDidMount() {
      M.AutoInit();
    }

    _next() {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 2: currentStep + 1
      this.setState({
        currentStep: currentStep
      })

    }

    _prev() {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        });
    }

    handleChange(event) {
      
      const {name, value} = event.target
      if (name === 'private' && value === "on") {
        this.setState({private: true})
      }
      if (name.includes('option-')){
        let index = parseInt(name.split('-')[1])
        let list = this.state.list.slice(0, this.state.list.length)
      
        if (list.length == index) {
          list[index-1] = value
        } else {
          list.push(value)
        }
        this.setState({list: list})
      }
        this.setState({
            [name]: value
        });
    }
  

    // Trigger an alert on form submission
    handleSubmit = (event) => {
      event.preventDefault()
      let num_options = this.state.list.length
      const newBracket = {
        duration: this.state.duration,
        title: this.state.title,
        end_display: this.state.display,
        private: this.state.private,
        options_list: this.state.list,
        num_options: num_options, 
      }
      axios.post(`${process.env.REACT_APP_SERVER_URL}/bracket/create`, newBracket)
      .then((newBracket) => {
        if (!newBracket.data.msg.includes('created')) {
          this.setState({error: true, loading: false})
        } else {
          this.setState({redirect: true, loading: false})
        }
      })
      .catch((err) => {
        this.setState({error: true, loading: false})
      })
    }

  componentDidUpdate(){
    M.AutoInit(); 
  }

  get previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <a className="waves-effect waves-light btn pink" onClick={this._prev}>Previous</a>
      )
    }
    return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <2){
      return (
        <div><a className="waves-effect waves-light btn pink" onClick={this._next}>Next</a></div>    
      )
    }
    return null;
  }
    render() {  
      M.AutoInit(); 
      if (this.state.redirect === true) {
        return <Redirect to='/finishedcreate' />
      }
      if (this.state.error) {
        return <div style={{color: "red"}}>AND ERROR HAS OCCURED. PLEASE TRY AGAIN OR CONTACT SUPPORT.</div>
      }
      return (
        <React.Fragment>
        <h1>Create a Bracket</h1>
          
        <form onSubmit={this.handleSubmit}>
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            duration={this.state.duration}
            options={this.state.options}
            title={this.state.title} 
            display={this.state.display}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            options={this.state.options}
            handleSubmit={this.handleSubmit}
          />
          {this.previousButton}
          {this.nextButton}
        </form>
        </React.Fragment>
      )
      }
  }


import React, {Component} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import M from "materialize-css"

export default class CreatePoll extends Component {

    constructor(props) {
      super(props)
      // Set the initial input values
      this.state = {
        currentStep: 1, // Default is Step 1
        duration: '',
        option: '',
        title: '', 
        display: '',
      }
      // Bind the submission to handleChange() 
      this.handleChange = this.handleChange.bind(this)
      this._next = this._next.bind(this)
      this._prev = this._prev.bind(this)
    }
    componentDidMount() {
      M.AutoInit(); 
    }
    _next() {
      let currentStep = this.state.currentStep
      // If the current step is 1 or 2, then add one on "next" button click
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }

    _prev() {
      let currentStep = this.state.currentStep
      // If the current step is 2 or 3, then subtract one on "previous" button click
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }

    // Use the submitted data to set the state
    handleChange(event) {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
    
    // Trigger an alert on form submission
    handleSubmit = (event) => {
      event.preventDefault()
      const { duration, option, title, display } = this.state
    }

  componentDidUpdate() {
    console.log("IN UPDATE")
    M.AutoInit(); 
  }

get previousButton(){
  let currentStep = this.state.currentStep;
  // If the current step is not 1, then render the "previous" button
  if(currentStep !==1){
    return (
      <a class="waves-effect waves-light btn pink" onClick={this._prev}>Previous</a>
    )
  }
  // ...else return nothing
  return null;
}

get nextButton(){
  let currentStep = this.state.currentStep;
  // If the current step is not 3, then render the "next" button
  if(currentStep <3){
    return (
      <a class="waves-effect waves-light btn pink" onClick={this._next}>Next</a>      
    )
  }
  // ...else render nothing
  return null;
}
    render() {  
      M.AutoInit(); 
      return (
        <React.Fragment>
        <h1>Create a Bracket</h1>
        
          
        <form onSubmit={this.handleSubmit}>
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}
          />
          {/* <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          /> */}
          {this.previousButton}
          {this.nextButton}
        </form>
        </React.Fragment>
      )
      }
  }
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
        options: '',
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
      console.log(event.target)
      const {name, value} = event.target
      console.log(name)
      console.log(value)
      console.log(this.state)
      this.setState({
        [name]: value
      })    
    }
    
    // Trigger an alert on form submission
    handleSubmit = (event) => {
      event.preventDefault()
      const { duration, options, title, display } = this.state
    }

  componentDidUpdate() {
    console.log("IN UPDATE")
    M.AutoInit(); 
  }

get previousButton(){
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <a href="." className="waves-effect waves-light btn pink" onClick={this._prev}>Previous</a>
    )
  }
  return null;
}

get nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <2){
    return (
      <a href="." className="waves-effect waves-light btn pink" onClick={this._next}>Next</a>      
    )
  }
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
            duration={this.state.duration}
            options={this.state.options}
            title={this.state.title} 
            display={this.state.display}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            options={this.state.options}
          />
          {this.previousButton}
          {this.nextButton}
        </form>
        </React.Fragment>
      )
      }
  }
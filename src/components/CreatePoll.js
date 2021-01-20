import {Component} from 'react'

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
      const { email, username, password } = this.state
    }
    
    // Render UI will go here...
  }
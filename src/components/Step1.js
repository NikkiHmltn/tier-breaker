import React, {Component} from 'react'
import M from 'materialize-css'

export default class Step1 extends Component {
    componentDidMount() {
        console.log('in mount')
        let collapsible = document.querySelectorAll(".collapsible");
        
        M.AutoInit(); 
        M.Collapsible.init(collapsible, {});
      }
    render() {
        
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div>
          <label htmlFor="title">Title/Question</label>
          <input
            className="input-field"
            id="title"
            name="title"
            type="text"
            placeholder="Who would win a hot dog eating contest?"
            value={this.props.title} // Prop: The email input data
            onChange={this.props.handleChange} // Prop: Puts data into state
          />
        
          <div className="input-field">
          <select name="options" id="options" onChange={this.props.handleChange}>
            <option>Select One</option>
            <option value="2" >2</option>
            <option value="4" >4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
          <label htmlFor="options">How many Tier 1 items do you want?</label>
          </div>
        <div className="input-field">
          <select name="duration" id="duration"onChange={this.props.handleChange}>
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
          <div className="input-field">
          <select name="display" id="display" onChange={this.props.handleChange}>
            <option>Select One</option>
            <option value="Top">Top 3</option>
            <option value="Full">Full Bracket</option>
            <option value="Winner">Just Winner</option>
          </select>
          <label htmlFor="display">Final Results Display</label>
          </div>
        <div className="switch">
            <label>
                Public
                <input type="checkbox" name="private" onChange={this.props.handleChange}/>
                <span style={{backgroundColor: "pink"}} className="lever"></span>
                Private
            </label>
        </div>
        <br></br>
        </div>

      )
    }
  }
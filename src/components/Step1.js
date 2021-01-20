import React, {Component} from 'react'
import M from 'materialize-css'

export default class Step1 extends Component {
    
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
          <select name="options" id="options">
            <option>Select One</option>
            <option value={this.props.options}>2</option>
            <option value={this.props.options}>4</option>
            <option value={this.props.options}>8</option>
            <option value={this.props.options}>16</option>
            <option value={this.props.options}>32</option>
          </select>
          <label htmlFor="options">How many Tier 1 items do you want?</label>
          </div>
        <div className="input-field">
          <select name="duration" id="duration">
            <option>Select One</option>
            <option value={this.props.duration}>1 day</option>
            <option value={this.props.duration}>2 days</option>
            <option value={this.props.duration}>3 days</option>
            <option value={this.props.duration}>4 days</option>
            <option value={this.props.duration}>5 days</option>
            <option value={this.props.duration}>6 days</option>
            <option value={this.props.duration}>7 days</option>
          </select>
          <label htmlFor="duration">Voting Duration</label>
        </div>
          <div className="input-field">
          <select name="display" id="display">
            <option>Select One</option>
            <option value={this.props.display}>Top 3</option>
            <option value={this.props.display}>Full Bracket</option>
            <option value={this.props.display}>Just Winner</option>
          </select>
          <label htmlFor="display">Final Results Display</label>
          </div>
        <div className="switch">
            <label>
                Public
                <input type="checkbox" />
                <span style={{backgroundColor: "pink"}} className="lever"></span>
                Private
            </label>
        </div>
        <br></br>
        {/* <a class="waves-effect waves-light btn pink" href="">Next</a> */}
        </div>

      )
    }
  }
import React, {Component} from 'react'
import './Step2.css'

export default class Step2 extends Component {

    componentDidMount(){

    } 

    render() {
        console.log(this.props)
      if (this.props.currentStep !== 2) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      //get this.props.options
      // multiply the array of div/input by that optionsnum/2
      // set variable maybe for loops of options num and set that to the placeholder and name
        let optionNum = parseInt(this.props.options)
        let optionArray = Array.from({length: optionNum}, (_, i) => i + 1)
     
        //matchups empty array 
        //iterate thru optionsArray
        //for each div, {optionArray[i]}
       
        function makeInput(optionNumber) {
            return <input type="text" placeholder={"Option " + optionNumber} name={"Option " + optionNumber} />
        }

        const matchups = []

        for (let i = 1; i < optionNum; i+= 2){
            let option1 = makeInput(i)
            let option2 = makeInput(i +1)
            let finalDiv =  <div className="bracket-options">
                    {option1}
                    <br></br>
                    VS
                    <br></br>
                    {option2}
                </div>
            
            matchups.push(finalDiv)
        }

        

      return(
        <div className="brackets">
            {matchups}
        </div>
      )
    }
  }
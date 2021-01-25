import { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './css/EnterCode.css';
function EnterCode() {

  const [pollKey, setPollKey] = useState('');
  const [bracket, setBracket] = useState('')

  const history = useHistory();

  const handleSubmit = (e) => {
    console.log('----Poll Key----');
    console.log(`Searched For: ${pollKey}`);
    e.preventDefault()

    axios.get(`${process.env.REACT_APP_SERVER_URL}/bracket/${pollKey}`).then((response) => {
      setBracket(response.data._brackets);
      // console.log(response.data);

      history.push({
        pathname: `/bracket/`,
        state: { key: pollKey,  }
      })

    })
  }


  return (
    <div className="EnterCode">
      <h1>Enter Code</h1>
      <div className="six-box">
        <input className="input" onChange={ e => setPollKey(e.target.value) } name="code" type="text" placeholder="8 DIGIT CODE" maxLength="8"></input>
      </div>
      <div>
        <a onClick={handleSubmit} href="." className="waves-effect waves-light btn pink">Vote!</a>
      </div>
    </div>
  );
}

export default EnterCode;
